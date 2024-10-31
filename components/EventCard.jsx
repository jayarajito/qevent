"use client";

import Tag from "./Tag";
import Link from "next/link";

const EventCard = ({ eventData }) => {
  return (
    // TODO: Update height to be  fit in the stub
    <div className="hover-inverse w-[30%] h-fit group transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      <Link
        href={`/events/${eventData.id}`}
        className="rounded-md text-dark flex-shrink-0 scroll-snap-card p-4"
      >
        <div>
          {/* TODO: Update image in the stub */}
          <img
            className="w-full  mb-3 group-hover:filter-none shadow-lg m-auto "
            src={eventData.image}
            alt="Bonnie image"
          />
          {console.log("Before MapError")}
          <div className="flex gap-2 items-center">
            {eventData?.tags?.map((tag) => {
              <Tag text={tag} key={tag} />;
              console.log(tag);
            })}
          </div>
          <p className="mt-5 mb-10">
            {new Date(eventData.date).toDateString()} | {eventData.time}
          </p>
          <p>{eventData.location}</p>
          <h2 className="text-2xl font-bold">{eventData.name}</h2>
          {/* TODO: Remove description from stub */}
          <div className="flex justify-between items-center mt-10">
            <h3 className="text-2xl">{eventData.artist}</h3>
            <h3 className="text-2xl">
              {" "}
              {eventData.price > 0
                ? `$ ${eventData.price.toLocaleString()}`
                : "FREE"}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;
