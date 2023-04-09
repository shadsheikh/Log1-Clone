import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Cards from "./Cards";
import DropDown from "./DropDown"
import DisplayContent from "./DisplayContent";
const ViewHeading = () => {
  return (
    <div>
      <TabView>
        <TabPanel header="Global" leftIcon="pi pi-globe mx-2">
        <DropDown/>
          <Cards />
          <DisplayContent/>
        </TabPanel>
        <TabPanel header="Team" leftIcon="pi pi-users mx-2">
          <p className="m-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
        <TabPanel header="My" leftIcon="pi pi-user mx-2">
          <p className="">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus.
          </p>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default ViewHeading;
