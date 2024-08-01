import React from "react";
import Container from "./Container";

import InfoSection from "../InfoSection";
import NavigationList from "./NavigationList";
import ContentSection from "./ContentSection";
import { ScrollProvider } from "./context/scrollContext";

function Index() {
  return (
    <ScrollProvider>
      <Container>
        
          <InfoSection>
            <NavigationList />
          </InfoSection>

          <ContentSection />
      </Container>
    </ScrollProvider>
  );
}

export default Index;
