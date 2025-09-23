import React from 'react';
import Cal from '@calcom/embed-react';

export default function Booking() {
  return (
    <Cal
      namespace="15min"
      calLink="billen-belhomme/15min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ 
        layout: "month_view",
        theme: "dark",
        // FIX: The Cal.com embed config expects string values, so the boolean value `true` is converted to the string "true".
        hideEventTypeDetails: "true"
      }}
    />
  );
}
