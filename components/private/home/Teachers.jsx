"use client";
import { teacherprof } from "@/assets";
import Container from "@/components/shared/Container";
import { db } from "@/firebase/config";
import { onValue, orderByKey, query, ref } from "firebase/database";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Loader } from "lucide-react";

const Teachers = () => {
  const [teachersData, setTeachersData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const teachersRef = query(ref(db, "teachers"), orderByKey());

    const unsubscribe = onValue(teachersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const teachersArray = Object.keys(data)
          .map((key) => ({
            id: key,
            ...data[key],
          }))
          .reverse();
        setTeachersData(teachersArray);
        setIsLoading(false);
      } else {
        setTeachersData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const indexOfLastTeacher = currentPage * itemsPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
  const currentTeachers = teachersData?.slice(
    indexOfFirstTeacher,
    indexOfLastTeacher
  );

  const handlePageChange = (page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const totalPages = Math.ceil(teachersData?.length / itemsPerPage);

  return (
    <Container>
      <div className="flex w-full flex-col justify-center items-center px-6 py-12">
        <div className="flex justify-center items-center gap-2 flex-col mb-12">
          <h2 className="text-3xl md:text-6xl font-semibold">Our Teachers.</h2>
          <p className="text-base md:text-lg text-center md:max-w-[80%]">
            Our teachers are highly qualified and experienced in their field and
            are dedicated to help students learn and grow.
          </p>
        </div>
        {isLoading && (
          <Loader className="translate-y-1/2 w-10 h-10 text-accent spin" />
        )}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-14 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {currentTeachers &&
            currentTeachers.map((teacher) => (
              <div key={teacher.id} className="flex flex-col items-center">
                <div className="rounded-t-full border-4 hover:border-accent transition-all duration-300 overflow-hidden">
                  <div className="p-4 overflow-hidden flex justify-center items-center">
                    <Image
                      src={teacher.downloadUrl}
                      alt="Teacher Profile"
                      width={1000}
                      height={1000}
                      className="w-[90%] md:w-full object-cover"
                    />
                  </div>
                  <div className="w-full flex justify-center items-center flex-col p-3 pt-0">
                    <h3 className="text-xl font-semibold">{teacher.name}</h3>
                    <p className="text-base text-center">{teacher.subject}</p>
                    <p className="text-base text-center">
                      Years of Experience: {teacher.experience}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {teachersData && teachersData.length > itemsPerPage && (
          <div className="w-full flex mt-10">
            {" "}
            <Pagination className="flex w-full justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => (
                  <PaginationItem key={i + 1}>
                    <PaginationLink
                      onClick={() => handlePageChange(i + 1)}
                      active={i + 1 === currentPage}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {totalPages > 5 && <PaginationEllipsis />}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Teachers;
