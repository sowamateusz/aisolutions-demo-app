/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  DataConnector,
  SimpleSearchForm,
  List,
} from "aisolutions-react-components";

export default function Home() {
  const formatDateHelper = (dateString: string) => {
    const [datePart, timePart] = dateString.split(" ");
    const cleanTime = timePart.replace(".0", "");
    return `${datePart}T${cleanTime}+02:00`;
  };
  const dataConnectorConfig = {
    url: "/api/data",
    mapper: (data: any[]) =>
      data.map((item) => ({
        id: item._id,
        title: item.signature,
        subtitle: item.excerpt,
        date: formatDateHelper(item.publicationDate),
      })),
  };
  return (
    <div className="p-5">
      <h1 className="text-lg">Demo App</h1>
      <div className="flex gap-5 mt-5">
        <DataConnector config={dataConnectorConfig}>
          <div className="space-y-4">
            <SimpleSearchForm />
            <List />
          </div>
        </DataConnector>
      </div>
    </div>
  );
}
