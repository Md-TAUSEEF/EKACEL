import React, { useMemo, useState } from "react";
import {
  Battery,
  Calculator,
  CheckCircle2,
  Clock3,
  Gauge,
  Lightbulb,
  Plus,
  RotateCcw,
  ShieldCheck,
  Trash2,
  Tv,
  Zap,
} from "lucide-react";

/* =========================================================
   LOAD CALCULATOR
   Battery / Inverter Load Calculator
   ========================================================= */

const APPLIANCE_PRESETS = [
  {
    id: "fan",
    name: "Ceiling Fan",
    icon: "fan",
    defaultWatts: 75,
    defaultHours: 8,
  },
  {
    id: "led",
    name: "LED Bulb",
    icon: "bulb",
    defaultWatts: 10,
    defaultHours: 6,
  },
  {
    id: "tv",
    name: "LED TV",
    icon: "tv",
    defaultWatts: 120,
    defaultHours: 5,
  },
  {
    id: "fridge",
    name: "Refrigerator",
    icon: "fridge",
    defaultWatts: 180,
    defaultHours: 8,
  },
  {
    id: "cooler",
    name: "Air Cooler",
    icon: "cooler",
    defaultWatts: 200,
    defaultHours: 6,
  },
  {
    id: "computer",
    name: "Computer",
    icon: "computer",
    defaultWatts: 200,
    defaultHours: 6,
  },
  {
    id: "laptop",
    name: "Laptop",
    icon: "laptop",
    defaultWatts: 65,
    defaultHours: 6,
  },
  {
    id: "router",
    name: "Wi-Fi Router",
    icon: "router",
    defaultWatts: 15,
    defaultHours: 12,
  },
  {
    id: "ac",
    name: "Air Conditioner",
    icon: "ac",
    defaultWatts: 1500,
    defaultHours: 4,
  },
];

const INITIAL_APPLIANCES = [
  {
    id: 1,
    appliance: "fan",
    quantity: 2,
    watts: 75,
    hours: 8,
  },
  {
    id: 2,
    appliance: "led",
    quantity: 4,
    watts: 10,
    hours: 6,
  },
  {
    id: 3,
    appliance: "tv",
    quantity: 1,
    watts: 120,
    hours: 5,
  },
];

const getPreset = (id) =>
  APPLIANCE_PRESETS.find((item) => item.id === id) || APPLIANCE_PRESETS[0];

const formatNumber = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 1,
  }).format(value);

const getApplianceIcon = (type) => {
  switch (type) {
    case "bulb":
      return Lightbulb;

    case "tv":
      return Tv;

    case "fridge":
      return Battery;

    default:
      return Zap;
  }
};

const getBatteryRecommendation = (requiredAh) => {
  if (requiredAh <= 75) {
    return {
      capacity: 75,
      label: "75 Ah",
      type: "Inverter Battery",
    };
  }

  if (requiredAh <= 110) {
    return {
      capacity: 110,
      label: "110 Ah",
      type: "Inverter Battery",
    };
  }

  if (requiredAh <= 150) {
    return {
      capacity: 150,
      label: "150 Ah",
      type: "Inverter Battery",
    };
  }

  if (requiredAh <= 180) {
    return {
      capacity: 180,
      label: "180 Ah",
      type: "Inverter Battery",
    };
  }

  if (requiredAh <= 200) {
    return {
      capacity: 200,
      label: "200 Ah",
      type: "Inverter Battery",
    };
  }

  return {
    capacity: Math.ceil(requiredAh / 100) * 100,
    label: `${Math.ceil(requiredAh / 100) * 100} Ah`,
    type: "Multiple Battery System",
  };
};

const getInverterRecommendation = (load) => {
  const requiredVA = load / 0.8;

  if (requiredVA <= 600) return "600 VA";
  if (requiredVA <= 850) return "850 VA";
  if (requiredVA <= 1100) return "1100 VA";
  if (requiredVA <= 1400) return "1400 VA";
  if (requiredVA <= 1600) return "1600 VA";
  if (requiredVA <= 2000) return "2000 VA";
  if (requiredVA <= 2500) return "2500 VA";

  return `${Math.ceil(requiredVA / 500) * 500} VA`;
};

export default function LoadCalculator() {
  const [appliances, setAppliances] = useState(INITIAL_APPLIANCES);

  const [batteryVoltage, setBatteryVoltage] = useState(12);

  const [desiredBackup, setDesiredBackup] = useState(4);

  const [showAddAppliance, setShowAddAppliance] = useState(false);

  /* =========================================================
     CALCULATIONS
     ========================================================= */

  const calculations = useMemo(() => {
    const totalLoad = appliances.reduce((total, item) => {
      return total + item.quantity * item.watts;
    }, 0);

    const totalDailyEnergy = appliances.reduce((total, item) => {
      return total + item.quantity * item.watts * item.hours;
    }, 0);

    /*
      Battery calculation:

      Battery Ah =
      Load(W) × Backup Hours
      -----------------------
      Battery Voltage × Efficiency × DoD

      Efficiency = 85%
      DoD        = 80%
    */

    const inverterEfficiency = 0.85;
    const depthOfDischarge = 0.8;

    const requiredBatteryAh =
      (totalLoad * desiredBackup) /
      (batteryVoltage * inverterEfficiency * depthOfDischarge);

    const battery = getBatteryRecommendation(requiredBatteryAh);

    const inverter = getInverterRecommendation(totalLoad);

    /*
      Backup with recommended battery.
      Approximate usable energy.
    */

    const usableBatteryEnergy =
      battery.capacity * batteryVoltage * inverterEfficiency * depthOfDischarge;

    const estimatedBackup = totalLoad > 0 ? usableBatteryEnergy / totalLoad : 0;

    return {
      totalLoad,
      totalDailyEnergy,
      requiredBatteryAh,
      battery,
      inverter,
      estimatedBackup,
    };
  }, [appliances, batteryVoltage, desiredBackup]);

  /* =========================================================
     HANDLERS
     ========================================================= */

  const updateAppliance = (id, field, value) => {
    setAppliances((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "appliance" ? value : Math.max(0, Number(value)),
            }
          : item,
      ),
    );
  };

  const removeAppliance = (id) => {
    setAppliances((current) => current.filter((item) => item.id !== id));
  };

  const addAppliance = (type) => {
    const preset = getPreset(type);

    setAppliances((current) => [
      ...current,
      {
        id: Date.now(),
        appliance: preset.id,
        quantity: 1,
        watts: preset.defaultWatts,
        hours: preset.defaultHours,
      },
    ]);

    setShowAddAppliance(false);
  };

  const resetCalculator = () => {
    setAppliances([]);
    setBatteryVoltage(12);
    setDesiredBackup(4);
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-800">
      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden bg-white">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#eaf5ff] blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#f0f9ff] blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Calculator size={17} />
              Battery Load Calculator
            </div>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Find the Right Battery for
              <span className="block text-teal-700">
                Your Power Requirements
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Add your home appliances, enter their power consumption and usage
              hours to calculate your load, battery capacity, inverter
              requirement and estimated backup.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-7 lg:grid-cols-[1.55fr_0.9fr]">
          {/* =================================================
              LEFT SIDE
              ================================================= */}

          <div className="space-y-6">
            {/* Appliance Card */}

            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Your Appliances
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Add the appliances you want to run on battery backup.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddAppliance((value) => !value)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-blue-800"
                >
                  <Plus size={18} />
                  Add Appliance
                </button>
              </div>

              {/* Add Appliance Menu */}

              {showAddAppliance && (
                <div className="border-b border-slate-100 bg-slate-50 p-5 sm:p-6">
                  <p className="mb-3 text-sm font-semibold text-slate-700">
                    Select an appliance
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {APPLIANCE_PRESETS.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => addAppliance(item.id)}
                        className="rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-blue-400 hover:bg-blue-50"
                      >
                        <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                          <Zap size={17} />
                        </div>

                        <p className="text-xs font-semibold text-slate-800">
                          {item.name}
                        </p>

                        <p className="mt-1 text-[11px] text-slate-400">
                          {item.defaultWatts} W
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Appliance List */}

              <div className="p-5 sm:p-6">
                {appliances.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <Plus size={24} />
                    </div>

                    <h3 className="mt-4 font-semibold text-slate-800">
                      No appliances added
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Click “Add Appliance” to start calculating.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appliances.map((item, index) => {
                      const preset = getPreset(item.appliance);
                      const Icon = getApplianceIcon(preset.icon);

                      return (
                        <div
                          key={item.id}
                          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
                        >
                          <div className="grid gap-4 md:grid-cols-[1.3fr_0.65fr_0.8fr_0.8fr_auto] md:items-end">
                            {/* Appliance */}

                            <div>
                              <label className="mb-2 block text-xs font-semibold text-slate-600">
                                Appliance
                              </label>

                              <div className="relative">
                                <select
                                  value={item.appliance}
                                  onChange={(e) => {
                                    const newPreset = getPreset(e.target.value);

                                    setAppliances((current) =>
                                      current.map((appliance) =>
                                        appliance.id === item.id
                                          ? {
                                              ...appliance,
                                              appliance: newPreset.id,
                                              watts: newPreset.defaultWatts,
                                              hours: newPreset.defaultHours,
                                            }
                                          : appliance,
                                      ),
                                    );
                                  }}
                                  className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 pl-10 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                >
                                  {APPLIANCE_PRESETS.map((option) => (
                                    <option key={option.id} value={option.id}>
                                      {option.name}
                                    </option>
                                  ))}
                                </select>

                                <Icon
                                  size={17}
                                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600"
                                />
                              </div>
                            </div>

                            {/* Quantity */}

                            <div>
                              <label className="mb-2 block text-xs font-semibold text-slate-600">
                                Quantity
                              </label>

                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) =>
                                  updateAppliance(
                                    item.id,
                                    "quantity",
                                    e.target.value,
                                  )
                                }
                                className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                              />
                            </div>

                            {/* Watts */}

                            <div>
                              <label className="mb-2 block text-xs font-semibold text-slate-600">
                                Power / Unit
                              </label>

                              <div className="relative">
                                <input
                                  type="number"
                                  min="0"
                                  value={item.watts}
                                  onChange={(e) =>
                                    updateAppliance(
                                      item.id,
                                      "watts",
                                      e.target.value,
                                    )
                                  }
                                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 pr-10 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                                  W
                                </span>
                              </div>
                            </div>

                            {/* Hours */}

                            <div>
                              <label className="mb-2 block text-xs font-semibold text-slate-600">
                                Usage / Day
                              </label>

                              <div className="relative">
                                <input
                                  type="number"
                                  min="0"
                                  max="24"
                                  step="0.5"
                                  value={item.hours}
                                  onChange={(e) =>
                                    updateAppliance(
                                      item.id,
                                      "hours",
                                      e.target.value,
                                    )
                                  }
                                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 pr-10 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                />

                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                                  Hr
                                </span>
                              </div>
                            </div>

                            {/* Delete */}

                            <button
                              type="button"
                              onClick={() => removeAppliance(item.id)}
                              className="flex h-11 w-full items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100 md:w-11"
                              aria-label={`Remove appliance ${index + 1}`}
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>

                          {/* Row Calculation */}

                          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 text-xs">
                            <span className="text-slate-500">
                              Appliance Load
                            </span>

                            <span className="font-bold text-slate-800">
                              {formatNumber(item.quantity * item.watts)} W
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                BATTERY SETTINGS
                ================================================= */}

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-900">
                  Battery Requirements
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Select your battery voltage and required backup time.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Voltage */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Battery Voltage
                  </label>

                  <div className="grid grid-cols-2 gap-2">
                    {[12, 24].map((voltage) => (
                      <button
                        key={voltage}
                        type="button"
                        onClick={() => setBatteryVoltage(voltage)}
                        className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                          batteryVoltage === voltage
                            ? "border-blue-600 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                        }`}
                      >
                        {voltage}V
                      </button>
                    ))}
                  </div>
                </div>

                {/* Backup */}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Desired Backup
                  </label>

                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      max="24"
                      step="0.5"
                      value={desiredBackup}
                      onChange={(e) =>
                        setDesiredBackup(Math.max(1, Number(e.target.value)))
                      }
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 pr-14 text-sm font-semibold outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                      Hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RESET
                ================================================= */}

            <div className="flex justify-end">
              <button
                type="button"
                onClick={resetCalculator}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
              >
                <RotateCcw size={16} />
                Reset Calculator
              </button>
            </div>
          </div>

          {/* =================================================
              RIGHT RESULT PANEL
              ================================================= */}

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
              {/* Result Header */}

              <div className="relative overflow-hidden p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-600/20 blur-2xl" />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Gauge size={24} />
                  </div>

                  <p className="text-sm font-medium text-slate-400">
                    Total Connected Load
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold text-white">
                      {formatNumber(calculations.totalLoad)}
                    </span>

                    <span className="mb-1 text-lg font-medium text-slate-400">
                      W
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Based on the appliances you selected.
                  </p>
                </div>
              </div>

              {/* Results */}

              <div className="space-y-3 border-t border-white/10 p-5">
                {/* Battery */}

                <div className="rounded-xl bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                        <Battery size={20} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">
                          Recommended Battery
                        </p>

                        <p className="mt-0.5 font-bold text-white">
                          {calculations.battery.label}
                        </p>
                      </div>
                    </div>

                    <CheckCircle2 size={20} className="text-green-400" />
                  </div>

                  <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-xs">
                    <span className="text-slate-500">
                      Calculated requirement
                    </span>

                    <span className="font-semibold text-slate-300">
                      {formatNumber(calculations.requiredBatteryAh)} Ah
                    </span>
                  </div>
                </div>

                {/* Inverter */}

                <div className="rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                      <Zap size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Recommended Inverter
                      </p>

                      <p className="mt-0.5 font-bold text-white">
                        {calculations.inverter}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Backup */}

                <div className="rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                      <Clock3 size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">Estimated Backup</p>

                      <p className="mt-0.5 font-bold text-white">
                        {formatNumber(calculations.estimatedBackup)} Hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Daily Energy */}

                <div className="rounded-xl bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                      <Calculator size={20} />
                    </div>

                    <div>
                      <p className="text-xs text-slate-400">
                        Daily Energy Consumption
                      </p>

                      <p className="mt-0.5 font-bold text-white">
                        {formatNumber(calculations.totalDailyEnergy)} Wh/day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}

              <div className="border-t border-white/10 bg-black/10 p-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-400"
                  />

                  <p className="text-xs leading-5 text-slate-400">
                    This calculator provides an estimated recommendation. Actual
                    backup may vary depending on battery condition, appliance
                    efficiency, temperature and usage pattern.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          INFO SECTION
          ===================================================== */}

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Calculator size={21} />
              </div>

              <h3 className="font-bold text-slate-900">Calculate Your Load</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter the appliances you want to run and their approximate power
                consumption.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <Battery size={21} />
              </div>

              <h3 className="font-bold text-slate-900">
                Find Battery Capacity
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Get an estimated battery capacity based on your connected load
                and desired backup.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                <Zap size={21} />
              </div>

              <h3 className="font-bold text-slate-900">
                Choose the Right Inverter
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The calculator also gives you an approximate inverter VA
                recommendation for your connected load.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
