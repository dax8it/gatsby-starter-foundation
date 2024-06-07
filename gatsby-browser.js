// gatsby-browser.js

// Existing service worker update ready function
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
    `Reload to display the latest version?`
  );

  if (answer === true) {
    window.location.reload();
  }
};

// New function to add the script to the document head
export const onClientEntry = () => {
  const script = document.createElement("script");
  script.defer = true;
  script.id = "namespace-widget";
  script.widgetId = "0x548c333a38cd063a93d94bf710466c0d7d9b9f31eec844c29296f948541e69b0";
  script.type = "module";
  script.src = "https://namespace.fra1.digitaloceanspaces.com/widget/latest/bundle.js";
  document.head.appendChild(script);
};