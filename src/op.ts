import { OpenPanel } from '@openpanel/web';
 
const openPanelClientID = import.meta.env.OPEN_PANEL_CLIENT_ID

// console.log("env", openPanelClientID)

export const op = new OpenPanel({
  clientId: openPanelClientID,
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});