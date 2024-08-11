import EventList from "@/components/events-list";
import H1 from "@/components/h1";

import React, { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { capitalize } from "@/lib/utils";

type EventsPageProps = {
  params: {
    city: string;
  };
};

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Event in ${capitalize(city)}`,
  };
}

export default async function EventPage({ params }: EventsPageProps) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events In ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventList city={city} />
      </Suspense>
    </main>
  );
}
