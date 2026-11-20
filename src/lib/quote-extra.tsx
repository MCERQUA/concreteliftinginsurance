"use client";
// Add-only ACORD-style quote fields (Tier 3). Every name here is OPTIONAL and is registered
// in public/__forms.html. No policy-number fields exist on this site by rule.
import { useState } from "react";

export type QValues = Record<string, string>;
type Opt = string | [string, string];
export interface QField { name: string; label: string; type: string; options?: Opt[]; min?: number; max?: number; maxLength?: number; placeholder?: string; inputMode?: string; when?: [string, string] }
export interface QSection { title: string; fields: QField[] }

export const EXTRA_SECTIONS: QSection[] = [
 {
  "title": "Business details (all optional)",
  "fields": [
   {
    "name": "fein",
    "label": "FEIN (Federal Tax ID)",
    "type": "text",
    "placeholder": "12-3456789",
    "maxLength": 10
   },
   {
    "name": "entityType",
    "label": "Business entity type",
    "type": "select",
    "options": [
     "Individual/Sole prop",
     "Partnership",
     "Corporation",
     "S-Corp",
     "LLC",
     "Joint venture",
     "Not for profit",
     "Trust"
    ]
   },
   {
    "name": "physicalCounty",
    "label": "County (physical location)",
    "type": "text"
   },
   {
    "name": "yearsInBusinessNumber",
    "label": "Years in business (number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "annualRevenue",
    "label": "Annual revenue (exact, in dollars)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "fullTimeEmployees",
    "label": "Full-time employees (exact number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "partTimeEmployees",
    "label": "Part-time employees (exact number)",
    "type": "number",
    "min": 0
   },
   {
    "name": "annualPayroll",
    "label": "Annual payroll (in dollars)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "usesSubcontractors",
    "label": "Do you use subcontractors?",
    "type": "radio",
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "name": "workSubcontractedPercent",
    "label": "Percent of work subcontracted out (0 to 100)",
    "type": "number",
    "min": 0,
    "max": 100
   }
  ]
 },
 {
  "title": "Mailing address (all optional)",
  "fields": [
   {
    "name": "mailing_same_as_physical",
    "label": "Is your mailing address the same as your physical address?",
    "type": "radio",
    "options": [
     "Yes",
     "No"
    ]
   },
   {
    "name": "mailing_street_address",
    "label": "Mailing street address",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_city",
    "label": "Mailing city",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_county",
    "label": "Mailing county",
    "type": "text",
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_state",
    "label": "Mailing state",
    "type": "select",
    "options": [
     "AL",
     "AK",
     "AZ",
     "AR",
     "CA",
     "CO",
     "CT",
     "DE",
     "DC",
     "FL",
     "GA",
     "HI",
     "ID",
     "IL",
     "IN",
     "IA",
     "KS",
     "KY",
     "LA",
     "ME",
     "MD",
     "MA",
     "MI",
     "MN",
     "MS",
     "MO",
     "MT",
     "NE",
     "NV",
     "NH",
     "NJ",
     "NM",
     "NY",
     "NC",
     "ND",
     "OH",
     "OK",
     "OR",
     "PA",
     "RI",
     "SC",
     "SD",
     "TN",
     "TX",
     "UT",
     "VT",
     "VA",
     "WA",
     "WV",
     "WI",
     "WY"
    ],
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   },
   {
    "name": "mailing_zip",
    "label": "Mailing ZIP",
    "type": "text",
    "maxLength": 10,
    "when": [
     "mailing_same_as_physical",
     "No"
    ]
   }
  ]
 },
 {
  "title": "Coverage requested (all optional)",
  "fields": [
   {
    "name": "desiredEffectiveDate",
    "label": "Desired policy effective date",
    "type": "date"
   },
   {
    "name": "limitsRequested",
    "label": "Liability limits wanted (summary)",
    "type": "select",
    "options": [
     "1M/2M",
     "1M/3M",
     "2M/4M",
     "Not sure"
    ]
   },
   {
    "name": "gl_each_occurrence",
    "label": "Each occurrence limit",
    "type": "select",
    "options": [
     "$500,000",
     "$1,000,000",
     "$2,000,000"
    ]
   },
   {
    "name": "gl_general_aggregate",
    "label": "General aggregate limit",
    "type": "select",
    "options": [
     "$1,000,000",
     "$2,000,000",
     "$3,000,000",
     "$4,000,000"
    ]
   },
   {
    "name": "gl_products_completed_ops_aggregate",
    "label": "Products / completed operations aggregate",
    "type": "select",
    "options": [
     "$1,000,000",
     "$2,000,000",
     "$3,000,000",
     "$4,000,000"
    ]
   },
   {
    "name": "gl_personal_advertising_injury",
    "label": "Personal and advertising injury limit",
    "type": "select",
    "options": [
     "$500,000",
     "$1,000,000",
     "$2,000,000"
    ]
   },
   {
    "name": "gl_rented_premises",
    "label": "Damage to rented premises limit",
    "type": "select",
    "options": [
     "$50,000",
     "$100,000",
     "$300,000"
    ]
   },
   {
    "name": "gl_medical_expense",
    "label": "Medical expense limit (any one person)",
    "type": "select",
    "options": [
     "$5,000",
     "$10,000"
    ]
   }
  ]
 },
 {
  "title": "Loss history, last 3 years (all optional, leave blank if none)",
  "fields": [
   {
    "name": "loss1Date",
    "label": "Loss 1: date",
    "type": "date"
   },
   {
    "name": "loss1LineOfBusiness",
    "label": "Loss 1: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss1Amount",
    "label": "Loss 1: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss1Status",
    "label": "Loss 1: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   },
   {
    "name": "loss2Date",
    "label": "Loss 2: date",
    "type": "date"
   },
   {
    "name": "loss2LineOfBusiness",
    "label": "Loss 2: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss2Amount",
    "label": "Loss 2: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss2Status",
    "label": "Loss 2: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   },
   {
    "name": "loss3Date",
    "label": "Loss 3: date",
    "type": "date"
   },
   {
    "name": "loss3LineOfBusiness",
    "label": "Loss 3: line of business",
    "type": "select",
    "options": [
     "General Liability",
     "Property",
     "Workers' Compensation",
     "Commercial Auto",
     "Pollution",
     "Other"
    ]
   },
   {
    "name": "loss3Amount",
    "label": "Loss 3: amount paid or reserved ($)",
    "type": "number",
    "inputMode": "decimal",
    "placeholder": "dollars, e.g. 85000"
   },
   {
    "name": "loss3Status",
    "label": "Loss 3: status",
    "type": "select",
    "options": [
     "Open",
     "Closed"
    ]
   }
  ]
 },
 {
  "title": "Certificate holder / additional insured (all optional)",
  "fields": [
   {
    "name": "additionalInsuredName",
    "label": "Additional insured / certificate holder name",
    "type": "text"
   },
   {
    "name": "additionalInsuredAddress",
    "label": "Address",
    "type": "text"
   },
   {
    "name": "additionalInsuredCity",
    "label": "City",
    "type": "text"
   },
   {
    "name": "additionalInsuredState",
    "label": "State",
    "type": "select",
    "options": [
     "AL",
     "AK",
     "AZ",
     "AR",
     "CA",
     "CO",
     "CT",
     "DE",
     "DC",
     "FL",
     "GA",
     "HI",
     "ID",
     "IL",
     "IN",
     "IA",
     "KS",
     "KY",
     "LA",
     "ME",
     "MD",
     "MA",
     "MI",
     "MN",
     "MS",
     "MO",
     "MT",
     "NE",
     "NV",
     "NH",
     "NJ",
     "NM",
     "NY",
     "NC",
     "ND",
     "OH",
     "OK",
     "OR",
     "PA",
     "RI",
     "SC",
     "SD",
     "TN",
     "TX",
     "UT",
     "VT",
     "VA",
     "WA",
     "WV",
     "WI",
     "WY"
    ]
   },
   {
    "name": "additionalInsuredZip",
    "label": "ZIP",
    "type": "text",
    "maxLength": 10
   },
   {
    "name": "certificateNeededBy",
    "label": "Certificate needed by",
    "type": "date"
   }
  ]
 }
];

const YES_NO_QUESTIONS: { key: string; label: string }[] = [
  { key: "buildingLeasedToOthers", label: "Is the building leased to others?" },
  { key: "applicantSubsidiary", label: "Is the applicant a subsidiary of another entity?" },
  { key: "applicantHasSubsidiaries", label: "Does the applicant have subsidiaries?" },
  { key: "safetyProgramsExist", label: "Do safety programs exist?" },
  { key: "exposureFlammables", label: "Any exposure to flammables, explosives or chemicals?" },
  { key: "otherInsurance", label: "Any other insurance with the proposed company?" },
  { key: "coverageTerminated", label: "Has any policy or coverage ever been terminated?" },
  { key: "pastAllegations", label: "Any past allegations of abuse, molestation or discrimination?" },
  { key: "indictedOrConvicted", label: "Any indictments or convictions?" },
  { key: "safetyViolations", label: "Any uncorrected fire and/or safety violations?" },
  { key: "negativeFinancialAction", label: "Any past negative financial action?" },
  { key: "judgementOrLien", label: "Any judgement or lien?" },
  { key: "businessInTrust", label: "Has the business been placed in a trust?" },
  { key: "foreignOperations", label: "Any foreign operations or products?" },
  { key: "otherVentures", label: "Do other ventures exist?" },
  { key: "possessDrones", label: "Does the applicant possess drones?" },
  { key: "hireDroneOperators", label: "Does the applicant hire drone operators?" },
  { key: "priorExclusionUninsured", label: "Has any product, work, accident or location been excluded, uninsured or self-insured from any previous coverage?" },
  { key: "tailCoveragePurchased", label: "Was tail coverage purchased under any previous policy?" },
  { key: "drawsPlansForOthers", label: "Does the applicant draw plans, designs or specifications for others?" },
  { key: "blastingOrExplosives", label: "Do any operations include blasting, or utilize or store explosive material?" },
  { key: "excavationOrEarthMoving", label: "Does any operation involve excavation, tunneling, underground work or earth moving?" },
  { key: "subsRequireLowerLimits", label: "Do subcontractors carry coverages or limits less than the applicant?" },
  { key: "subsWorkWithoutCOI", label: "Are subcontractors allowed to work without providing you a certificate of insurance?" },
  { key: "leaseEquipmentToOthers", label: "Does the applicant lease equipment to others, with or without operators?" },
  { key: "installServiceDemoProducts", label: "Does the applicant install, service or demonstrate products?" },
  { key: "foreignProducts", label: "Foreign products sold, distributed or used as components?" },
  { key: "researchAndDevelopment", label: "Research and development conducted, or new products planned?" },
  { key: "guaranteesWarranties", label: "Guarantees, warranties or hold harmless agreements?" },
  { key: "aircraftSpaceProducts", label: "Products related to the aircraft/space industry?" },
  { key: "productsRecalled", label: "Products recalled, discontinued or changed?" },
  { key: "productsRepackagedUnderLabel", label: "Products of others sold or repackaged under the applicant's label?" },
  { key: "productsUnderOthersLabel", label: "Products sold under the label of others?" },
  { key: "vendorsCoverageRequired", label: "Is vendors coverage required?" },
  { key: "sellsToOtherNamedInsured", label: "Does any named insured sell to another named insured?" },
  { key: "medicalFacilities", label: "Any medical facilities provided, or medical professionals employed or contracted?" },
  { key: "radioactiveExposure", label: "Any exposure to radioactive/nuclear materials?" },
  { key: "hazardousMaterialOps", label: "Do or did past, present or discontinued operations involve storing, treating, discharging, applying, disposing or transporting hazardous material?" },
  { key: "operationsSoldAcquired", label: "Any operations sold, acquired or discontinued in the last 5 years?" },
  { key: "rentOrLoanEquipment", label: "Do you rent or loan equipment to others?" },
  { key: "watercraftDocksFloats", label: "Any watercraft, docks or floats owned, hired or leased?" },
  { key: "parkingFacilities", label: "Any parking facilities owned or rented?" },
  { key: "parkingFeeCharged", label: "Is a fee charged for parking?" },
  { key: "recreationFacilities", label: "Recreation facilities provided?" },
  { key: "lodgingOperations", label: "Are there any lodging operations, including apartments?" },
  { key: "swimmingPool", label: "Is there a swimming pool on the premises?" },
  { key: "socialEvents", label: "Are social events sponsored?" },
  { key: "athleticTeams", label: "Are athletic teams sponsored?" },
  { key: "structuralAlterations", label: "Any structural alterations contemplated?" },
  { key: "demolitionExposure", label: "Any demolition exposure contemplated?" },
  { key: "activeJointVentures", label: "Has the applicant been active in, or is currently active in, joint ventures?" },
  { key: "leaseEmployees", label: "Do you lease employees to or from other employers?" },
  { key: "laborInterchange", label: "Is there a labor interchange with any other business or subsidiaries?" },
  { key: "dayCareFacilities", label: "Are day care facilities operated or controlled?" },
  { key: "crimesOnPremises", label: "Have any crimes occurred or been attempted on your premises within the last 3 years?" },
  { key: "formalSafetyPolicy", label: "Is there a formal, written safety and security policy in effect?" },
  { key: "promotionalSafetyClaims", label: "Does the business' promotional literature make any representation about the safety or security of the premises?" },
];


const EXPLAIN_KEYS = [
  "priorExclusionUninsured", "tailCoveragePurchased", "drawsPlansForOthers", "blastingOrExplosives", "excavationOrEarthMoving",
  "subsRequireLowerLimits", "subsWorkWithoutCOI", "leaseEquipmentToOthers", "watercraftDocksFloats", "formalSafetyPolicy",
  "installServiceDemoProducts", "researchAndDevelopment", "guaranteesWarranties", "aircraftSpaceProducts", "productsRecalled",
  "productsRepackagedUnderLabel", "productsUnderOthersLabel", "vendorsCoverageRequired", "sellsToOtherNamedInsured", "medicalFacilities",
  "radioactiveExposure", "hazardousMaterialOps", "operationsSoldAcquired", "rentOrLoanEquipment", "parkingFacilities",
  "parkingFeeCharged", "recreationFacilities", "socialEvents", "structuralAlterations", "demolitionExposure",
  "activeJointVentures", "laborInterchange", "dayCareFacilities", "crimesOnPremises", "promotionalSafetyClaims",
];

const EXPLAIN = new Set(EXPLAIN_KEYS);

export const YN_FIELD_NAMES: string[] = YES_NO_QUESTIONS.flatMap((q) => [`yn_${q.key}`, ...(EXPLAIN.has(q.key) ? [`ynExplain_${q.key}`] : [])]);
export const EXTRA_FIELD_NAMES: string[] = [...EXTRA_SECTIONS.flatMap((s) => s.fields.map((f) => f.name)), ...YN_FIELD_NAMES];
export const EXTRA_DEFAULTS: QValues = Object.fromEntries(EXTRA_FIELD_NAMES.map((n) => [n, ""]));

export function pruneEmpty(v: QValues): QValues {
  return Object.fromEntries(Object.entries(v).filter(([, x]) => x !== ""));
}

function Radios({ name, value, onChange }: { name: string; value: string; onChange: (n: string, v: string) => void }) {
  return (
    <div className="flex gap-6">
      {["Yes", "No"].map((o) => (
        <label key={o} className="inline-flex items-center gap-2 text-sm">
          <input type="radio" name={name} value={o} checked={value === o} onChange={() => onChange(name, o)} />
          <span>{o}</span>
        </label>
      ))}
    </div>
  );
}

export function QuoteExtraFields({ values, onChange, inputClass, labelClass, headingClass }: { values: QValues; onChange: (name: string, value: string) => void; inputClass: string; labelClass: string; headingClass?: string }) {
  const [showYn, setShowYn] = useState(false);
  const h = headingClass || "text-base font-bold mt-6 mb-1";
  return (
    <div className="space-y-4">
      {EXTRA_SECTIONS.map((s) => (
        s.fields.length === 0 ? null : (
        <fieldset key={s.title} className="space-y-4">
          <legend className={h}>{s.title}</legend>
          {s.fields.map((f) => {
            if (f.when && (values[f.when[0]] || "") !== f.when[1]) return null;
            const v = values[f.name] ?? "";
            return (
              <div key={f.name}>
                <label htmlFor={f.name} className={labelClass}>{f.label}</label>
                {f.type === "radio" ? (
                  <Radios name={f.name} value={v} onChange={onChange}/>
                ) : f.type === "select" ? (
                  <select id={f.name} name={f.name} value={v} onChange={(e) => onChange(f.name, e.target.value)} className={inputClass}>
                    <option value="">Select…</option>
                    {(f.options || []).map((o) => { const [val, lab] = Array.isArray(o) ? o : [o, o]; return <option key={val} value={val}>{lab}</option>; })}
                  </select>
                ) : (
                  <input id={f.name} name={f.name} type={f.type} value={v} min={f.min} max={f.max} maxLength={f.maxLength} inputMode={f.inputMode as never} placeholder={f.placeholder} onChange={(e) => onChange(f.name, e.target.value)} className={inputClass} />
                )}
              </div>
            );
          })}
        </fieldset>
        )
      ))}
      <fieldset className="space-y-4">
        <legend className={h}>Underwriting questions (all optional)</legend>
        <button type="button" onClick={() => setShowYn((x) => !x)} className="text-sm underline" aria-expanded={showYn}>
          {showYn ? "Hide the underwriting questions" : "Answer the underwriting questions now (optional, speeds up your quote)"}
        </button>
        {showYn && YES_NO_QUESTIONS.map((q) => {
          const name = `yn_${q.key}`;
          const ex = `ynExplain_${q.key}`;
          return (
            <div key={q.key}>
              <p className={labelClass}>{q.label}</p>
              <Radios name={name} value={values[name] ?? ""} onChange={onChange}/>
              {EXPLAIN.has(q.key) && values[name] === "Yes" && (
                <textarea name={ex} rows={2} maxLength={136} value={values[ex] ?? ""} placeholder="Please explain" onChange={(e) => onChange(ex, e.target.value)} className={`${inputClass} mt-2`} />
              )}
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}

const enc = (o: Record<string, string>) => new URLSearchParams(o).toString();

/**
 * Fail-loudly lead delivery: JSON webhook first, then the Netlify Forms fallback.
 * Returns true only when one channel ACCEPTED the lead (fetch resolves on 4xx/5xx, so status is checked).
 */
export async function deliverLead(opts: { webhookUrl: string; formName: string; source: string; data: Record<string, string>; formsPath?: string; skipWebhook?: boolean }): Promise<boolean> {
  if (!opts.skipWebhook) try {
    const r = await fetch(opts.webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_name: opts.formName, source: opts.source, ...opts.data }) });
    if (r.ok) return true;
  } catch { /* fall through to the Netlify Forms fallback */ }
  try {
    const r = await fetch(opts.formsPath || "/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: enc({ "form-name": opts.formName, ...opts.data }) });
    return r.ok;
  } catch {
    return false;
  }
}
