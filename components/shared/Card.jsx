import { Info } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextInside,
  CarouselPreviousInside,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Card = ({
  eventTitle,
  eventDescription,
  eventDate,
  eventTime,
  eventImg,
  eventLocation,
}) => {
  return (
    <div className="relative flex flex-col justify-center text-gray-700 bg-white shadow-md border-2 rounded-md w-full mx-auto hover:scale-100 transition-all duration-300 min-w-[300px] max-w-[340px]">
      {/* <div> */}
      {/* <Image
        width={1000}
        height={1000}
        src={eventImg}
        alt="Event Image"
        className="w-full h-full object-cover rounded-t-md"
      /> */}

      <Carousel
        className="w-full max-w-[100%]"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="h-full items-center">
          {eventImg?.length > 0 &&
            eventImg?.map((image, index) => {
              // console.log(
              //   "IMAGE SINGLE",
              //   image,
              //   image.split(" ")[1]?.split("_")[3]
              // );
              return (
                <CarouselItem
                  key={index}
                  className="w-full h-full flex justify-center items-center"
                >
                  <div className="p-2 w-full flex justify-center items-center">
                    {image.split(" ")[1].split("_")[3] === "mp4" ? (
                      <video
                        src={image?.split(" ")[0]}
                        autoPlay
                        controls
                        className="max-h-[300px] w-fit object-contain"
                      />
                    ) : (
                      <Image
                        width={1000}
                        height={300}
                        src={image.split(" ")[0]}
                        alt="Event Image"
                        className="max-h-[300px] w-fit object-contain rounded-md"
                      />
                    )}
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPreviousInside />
        <CarouselNextInside />
      </Carousel>

      {/* </div> */}
      <div className="px-6 py-4 flex flex-col gap-1">
        <p className="text-primary font-semibold text-lg">{eventTitle}</p>
        {/* <AlertDialog>
          <AlertDialogTrigger>
            <Info />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center text-primary">
                <h2 className="text-2xl font-bold leading-7 mb-2">
                  {eventTitle}
                </h2>
                <div className="flex flex-col">
                  <span className="font-medium">Date - {eventDate}</span>
                  <span className="font-medium">Time - {eventTime}</span>
                  <span className="font-medium">Location - {eventLocation}</span>
                </div>
              </AlertDialogTitle>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog> */}
        <p>
          <span className="font-semibold">Date</span> - {eventDate}
        </p>
        <p>
          <span className="font-semibold">Time</span> - {eventTime}
        </p>
        <p>
          <span className="font-semibold">Location</span> - {eventLocation}
        </p>
      </div>
    </div>
  );
};

export default Card;
