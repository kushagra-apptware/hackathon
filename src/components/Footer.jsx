// Reusable Components

// ContactInformation Component
const ContactInformation = ({ title, branches, copyright }) => {
  return (
    <div className="w-1/3 bg-gray-400">
      <div className="flex flex-col gap-5 p-5">
        <div className="text-xl font-bold">{title}</div>
        {branches.map((branch, index) => (
          <div className="branch" key={index}>
            <div className="font-semibold">{branch.name}</div>
            <div className="text-sm text-gray-800">{branch.address}</div>
            <div className="text-sm font-medium">{branch.contact}</div>
          </div>
        ))}
        <div className="text-sm text-gray-600">{copyright}</div>
      </div>
    </div>
  );
};

// ImportantLinks Component
const ImportantLinks = ({ links }) => {
  return (
    <div className="w-2/3 flex justify-center items-center">
      <div className="w-3/4 h-2/5 flex justify-around -ml-24">
        {links.map((linkGroup, index) => (
          <ul className="flex flex-col gap-1" key={index}>
            {linkGroup.map((link, subIndex) => (
              <li key={subIndex}>
                <a
                  href={link.redirectionPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

// Main Footer Component
export const Footer = () => {
  const branches = [
    {
      name: "Head Office",
      address: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Atque sequi, labore aliquid nam minima neque corrupti, incidunt`,
      contact: "1234567890",
    },
    {
      name: "Bangalore Office",
      address: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Atque sequi, labore aliquid nam minima neque corrupti, incidunt`,
      contact: "1234567890",
    },
  ];

  const importantLinks = [
    [
      { label: "For Startups", redirectionPath: "/startups" },
      { label: "For Enterprises", redirectionPath: "/enterprises" },
      { label: "Apptware AI Lab", redirectionPath: "/ai-lab" },
      { label: "Contact", redirectionPath: "/contact" },
      { label: "Blog", redirectionPath: "/blog" },
    ],
    [
      { label: "Facebook", redirectionPath: "https://facebook.com" },
      { label: "LinkedIn", redirectionPath: "https://linkedin.com" },
      { label: "Twitter", redirectionPath: "https://twitter.com" },
      { label: "Instagram", redirectionPath: "https://instagram.com" },
      { label: "YouTube", redirectionPath: "https://youtube.com" },
    ],
    [
      { label: "MVP", redirectionPath: "/mvp" },
      { label: "Artificial Intelligence", redirectionPath: "/ai" },
      { label: "Team Augmentation", redirectionPath: "/team-augmentation" },
    ],
  ];

  return (
    <footer>
      <div className="flex bg-gray-200">
        <ContactInformation
          title="APPTWARE"
          branches={branches}
          copyright="&copy; 2024 Apptware Solutions LLC"
        />
        <ImportantLinks links={importantLinks} />
      </div>
    </footer>
  );
};