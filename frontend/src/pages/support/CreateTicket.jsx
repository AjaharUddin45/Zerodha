import React from "react";

const sections = [
  {
    title: "Account Opening",
    icon: "fa-plus-circle",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "fa-user",
    links: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Kite",
    icon: "fa-bar-chart",
    links: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platforms",
      "Stockreports+",
      "GTT",
    ],
  },
  {
    title: "Funds",
    icon: "fa-credit-card",
    links: [
      "Adding Funds",
      "Fund Withdrawal",
      "eMandates",
      "Adding Bank Accounts",
    ],
  },
  {
    title: "Console",
    icon:  "fas fa-chart-pie",
    links: [
      "Reports",
      "Ledger",
      "Portfolio",
      "60 Day Challenge",
      "IPO",
      "Referral Program",
    ],
  },
  {
    title: "Coin",
    icon: "far fa-circle",
    links: [
      "Understanding Mutual Funds",
      "About Coin",
      "Buying and Selling through Coin",
      "Starting an SIP",
      "Managing your Portfolio",
      "Coin App",
      "Moving to Coin",
      "Government Securities",
    ],
  },
];

export default function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        {sections.map((section) => (
          <div className="col-4 p-5 mt-2 mb-2" key={section.title}>
            <h4>
              <i className={`fa ${section.icon}`} aria-hidden="true"></i>{" "}
              {section.title}
            </h4>
            {section.links.map((link) => (
              <React.Fragment key={link}>
                <a
                  href="#"
                  style={{ textDecoration: "none", lineHeight: "2.5" }}
                >
                  {link}
                </a>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}