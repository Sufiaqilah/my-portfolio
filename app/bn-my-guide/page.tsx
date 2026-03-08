const guides = [
  {
    id: "vms",
    title: "VMS",
    subtitle: "Vehicle Movement System",
    url: "https://vms.customs.gov.my/",
    description: "Register your vehicle movement with Malaysian Customs before entering Malaysia.",
    steps: [
      {
        step: 1,
        title: "Go to the VMS website",
        description: "Visit https://vms.customs.gov.my/ and select whether you are Malaysian or non-Malaysian.",
      },
      {
        step: 2,
        title: "Login or Register",
        description: "Log in to your existing account or register a new one if you haven't already.",
      },
      {
        step: 3,
        title: "New Application",
        description: "Once logged in, click on 'Permohonan Borang Baru' to start a new vehicle movement application.",
      },
      {
        step: 4,
        title: "Fill in Personal & Vehicle Details",
        description: "Fill in your plate number, vehicle color, insurance number, insurance due date, full name, passport number, nationality and expected arrival date in Malaysia.",
      },
      {
        step: 5,
        title: "Fill in Vehicle Info",
        description: "Fill in your car's model, brand, engine number, chassis number, year make and body type (e.g. SUV, coupe).",
      },
      {
        step: 6,
        title: "Fill in Sarawak Address",
        description: "Enter your complete address in Sarawak, Malaysia where you will be staying.",
      },
      {
        step: 7,
        title: "Submit & Get QR Code",
        description: "Review your details and submit. A QR code will be generated — save or screenshot it for use at the border.",
      },
    ],
  },
  {
    id: "ees",
    title: "EES",
    subtitle: "Electronic Exit System",
    url: "https://login.bdnsw.gov.bn/ees/user/login",
    description: "Apply for an exit pass through Brunei's Electronic Exit System before leaving Brunei.",
    steps: [
      {
        step: 1,
        title: "Go to the EES website",
        description: "Visit the EES portal and log in. If you don't have an account, register first.",
      },
      {
        step: 2,
        title: "New Pass Application",
        description: "Click on 'New Pass Application' and select your mode of travel and type of travel.",
      },
      {
        step: 3,
        title: "Select Control Post",
        description: "Choose which border control post you will be using — Sungai Tujoh, Ferry Serasa, Kuala Lurah, Ujong Jalan Temburong or Labu Temburong.",
      },
      {
        step: 4,
        title: "Fill in Applicant Details",
        description: "Fill in your personal details. Indicate whether you are the driver and whether you have a Frequent Commuter Pass.",
      },
      {
        step: 5,
        title: "Create Pass & Enter Vehicle Details",
        description: "Click 'Create Pass'. Enter your country of vehicle registration and plate number. If the vehicle has been used before, details will auto-fill. Otherwise enter chassis and engine number manually.",
      },
      {
        step: 6,
        title: "Review & Agree",
        description: "Review all vehicle details, agree to the terms and click Next.",
      },
      {
        step: 7,
        title: "Make Payment & Get QR Code",
        description: "Complete the payment. A QR code will be generated — save it for use at the border.",
      },
    ],
  },
  {
    id: "mdac",
    title: "MdAC",
    subtitle: "Malaysian Digital Arrival Card",
    url: "https://imigresen-online.imi.gov.my/mdac/main",
    description: "Register your arrival into Malaysia with the Malaysian Immigration Department.",
    steps: [
      {
        step: 1,
        title: "Go to the MdAC website",
        description: "Visit https://imigresen-online.imi.gov.my/mdac/main and click Register.",
      },
      {
        step: 2,
        title: "Fill in Your Details",
        description: "Fill in your personal details including your mode of travel — whether by flight, land or boat. Have your vehicle registration number ready.",
      },
      {
        step: 3,
        title: "Submit",
        description: "Review your details and submit. Keep a copy of your submission for reference at the border.",
      },
    ],
  },
];

export default function MiriGuidePage() {
  return (
    <main className="min-h-screen bg-neutral-950 px-6 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-neutral-500 text-sm mb-3 tracking-widest uppercase">Travel Guide</p>
        <h1 className="text-4xl font-bold text-white mb-4">Brunei to Malaysia Travel Guide</h1>
        <p className="text-neutral-400 text-lg mb-16">
          A complete step-by-step guide for Bruneians travelling to Malaysia by car which covers VMS, EES and MDAC registration.
        </p>

        <div className="flex flex-col gap-20">
          {guides.map((guide) => (
            <div key={guide.id}>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-mono rounded">{guide.title}</span>
                <span className="text-neutral-500 text-sm">{guide.subtitle}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{guide.subtitle}</h2>
              <p className="text-neutral-400 mb-2">{guide.description}</p>
              <a href={guide.url} target="_blank" className="text-sm text-neutral-500 hover:text-white transition-colors underline mb-8 block">{guide.url}</a>

              <div className="flex flex-col gap-6">
                {guide.steps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm text-neutral-400 font-mono">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      {/* Screenshot placeholder */}
                      <div className="mt-3 w-full h-40 bg-neutral-900 border border-dashed border-neutral-700 rounded-lg flex items-center justify-center">
                        <span className="text-neutral-600 text-sm">Screenshot coming soon</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}