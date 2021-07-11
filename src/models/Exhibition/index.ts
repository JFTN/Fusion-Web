import RoleModel from "models/ExhibitionRole";
import SectionModel from "models/ExhibitionSection";

enum VisibilityTypes {
  Public,
  Exclusive,
  Private,
}

interface ExhibitionModel {
  UUID: string;
  host: string;
  coHost: string[];
  title: string;
  description: string;
  keywords: string;
  sections: SectionModel[];
  roles: RoleModel[];
  openingDate: Date;
  closingDate: Date;
  visibility: VisibilityTypes;
  invitedAttendees: string[];
}

export default ExhibitionModel;

export { VisibilityTypes, ExhibitionModel }; // some how "export default ExhibitionModel" above can't be detected from the layout so I added it here
