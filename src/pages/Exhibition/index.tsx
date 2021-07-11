import React, { ReactElement, HTMLAttributes } from "react";
import { useParams } from "react-router-dom";

import ExhibitionLayout from "layouts/Exhibition";
import { ExhibitionModel } from "models/Exhibition";

const Exhibition = (): ReactElement => {
  const {
    UUID,
    host,
    coHost,
    title,
    description,
    keywords,
    sections,
    roles,
    openingDate,
    closingDate,
    visibility,
    invitedAttendees,
  } = useParams<ExhibitionModel>();
  return (
    <ExhibitionLayout
      UUID={UUID}
      host={host}
      coHost={coHost}
      title={title}
      description={description}
      keywords={keywords}
      sections={sections}
      roles={roles}
      openingDate={openingDate}
      closingDate={closingDate}
      visibility={visibility}
      invitedAttendees={invitedAttendees}
    />
  );
};

export default Exhibition;
