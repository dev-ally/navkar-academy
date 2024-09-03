"use client";
import TopperCard from "@/components/private/toppers/TopperCard";
import ToppersTable from "@/components/private/toppers/ToppersTable";
import Container from "@/components/shared/Container";
import { database } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ChevronDown, GraduationCap } from "lucide-react";
import React, { useEffect, useState } from "react";

const Toppers = () => {
  const [toppersLists, setToppersLists] = useState({});
  const [expandedSections, setExpandedSections] = useState({});

  const handleShowMore = (year) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [year]: !prevState[year],
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "toppers"));
        const yearsData = querySnapshot.docs.reduce((acc, doc) => {
          acc[doc.id] = doc.data();
          return acc;
        }, {});
        setToppersLists(yearsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, []);

  const sortedYears = Object.keys(toppersLists).sort((a, b) => b - a);

  return (
    <Container>
      <div className="flex flex-col items-center py-10">
        {sortedYears.map((year, index) => {
          const toppers = toppersLists[year];
          if (!toppers || (!toppers.top3.length && !toppers.others.length)) {
            return null;
          }

          const top3Toppers = toppers.top3.sort((a, b) => a.index - b.index);
          const otherToppers = toppers.others.sort((a, b) => a.index - b.index);

          const isLatestYear = index === 0;

          const midIndex = Math.ceil(otherToppers.length / 2);
          const firstHalf = otherToppers.slice(0, midIndex);
          const secondHalf = otherToppers.slice(midIndex);

          return (
            <div key={year} className="flex flex-col items-center  py-10">
              <h2 className="text-4xl font-bold flex items-center gap-2">
                <GraduationCap className="w-10 h-10" /> {year}{" "}
                <span className="text-accent">Toppers</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
                {top3Toppers.map((topper, index) => (
                  <TopperCard key={index} topper={topper} />
                ))}
              </div>

              {isLatestYear ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 justify-center">
                  <ToppersTable toppers={firstHalf} />
                  <ToppersTable toppers={secondHalf} />
                </div>
              ) : (
                otherToppers.length > 0 && (
                  <>
                    <div className="flex justify-center items-center w-full mt-5">
                      <button
                        onClick={() => handleShowMore(year)}
                        className="flex items-center px-10 py-2 bg-black text-white rounded-sm hover:bg-accent"
                      >
                        {expandedSections[year] ? "Show Less" : "Show More"}{" "}
                        <ChevronDown
                          className={`w-6 h-6 ${
                            expandedSections[year] ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Conditionally render more toppers for other years */}
                    {expandedSections[year] && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 animate-fadeIn justify-center">
                        <ToppersTable toppers={firstHalf} />
                        <ToppersTable toppers={secondHalf} />
                      </div>
                    )}
                  </>
                )
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Toppers;
