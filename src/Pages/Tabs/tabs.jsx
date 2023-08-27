import { useState } from "react";
import TabPanel from "./Tabpanel/Tabpanel";
import illustrationFeaturesTab1 from '../../assets/img1.svg'
import illustrationFeaturesTab2 from "../../assets/img2.svg";
import illustrationFeaturesTab3 from "../../assets/img3.svg";



const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const [tabsNames] = useState([
    {
      title: "Interactive Classes",
    },
    {
      title: "Hand Written Notes",
    },
    {
      title: "Regular Exams",
    },
  ]);
  const [tabs] = useState([
    {
      title: "Teacher Student Connection",
      description:
        " Students find themselves immersed in an engaging learning environment where the website's ease of use and interactive classes keep their attention focused.",
      image: illustrationFeaturesTab1,
    },
    {
      title: "Easy Accessible Notes",
      description:
        "We provide meticulously crafted handwritten notes, designed to enhance your learning experience and offer a valuable resource for your studies.",
      image: illustrationFeaturesTab2,
    },
    {
      title: "Exams And Practice Papers",
      description:
        "We conduct regular examinations to assess your progress, ensure comprehension, and foster continuous growth in your learning journey.",
      image: illustrationFeaturesTab3,
    },
  ]);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleNextTab = () => {
    if (selectedTab === tabs.length - 1) {
      setSelectedTab(0);
    } else {
      setSelectedTab(selectedTab + 1);
    }
  };

  return (
    <div>
      <ul
        role="tablist"
        className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0"
        aria-label="Bookmark features"
      >
        {tabsNames &&
          tabsNames.map((tab, index) => (
            <li role="presentation" className="text-center" key={`b-${index}`}>
              <button
                id={`tab-button-${index}`}
                role="tab"
                aria-selected={selectedTab === index}
                aria-controls={`tab-panel-${index}`}
                tabIndex={selectedTab === index ? "0" : "-1"}
                className={`border-tab relative min-w-[15.2325rem] border-b-2 px-6 py-4 tracking-[0.04em] text-very-dark-blue/50 transition duration-300 hover:text-soft-red md:px-[2.6875rem] md:py-[1.625rem] ${
                  selectedTab === index && "border-selected"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}
              </button>
            </li>
          ))}
      </ul>

      <div className="banner-2 py-[4.3125rem]">
        {tabs &&
          tabs.map((tab, index) => (
            <TabPanel
              key={`t-${index}`}
              selectedTab={selectedTab}
              index={index}
              title={tab.title}
              description={tab.description}
              image={tab.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Tabs;