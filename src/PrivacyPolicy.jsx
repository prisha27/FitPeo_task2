import React from "react";
import Footer from "./Footer";
import ProgressChecker from "./ProgressChecker"; 

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      
     
      <div className="absolute top-6 left-6 text-5xl font-bold font-headline">
        D!
      </div>

    
      <div className="flex flex-col md:flex-row flex-grow pt-20">
        
        
        <div className="w-full md:w-1/3 p-6">
          <h2 className="text-xl font-bold mt-0 mb-2  sticky top-0 self-start h-fit x-20">Privacy Policy</h2>
        </div>

       
        <div className="w-full md:w-2/3 px-6 pb-20">
          <div className="text-lg font-normal space-y-6">
            <p>
              This Privacy Policy is for the benefit of visitors to our website.
              It will tell you how we look after your personal data as your
              privacy is important to us.
            </p>

            <ul className="list-disc list-inside space-y-2 text-base">
              <li>No cookies</li>
              <li>No data sharing</li>
              <li>No ad networks</li>
              <li>Carbon neutral</li>
              <li>Fast and lightweight</li>
              <li>Compliant with all privacy laws</li>
            </ul>

            <p>
              Cabin is built on the concept of privacy-by-design. Visitor data is
              stored in a unique data structure which makes it 100% anonymous and
              compliant with all privacy laws, globally. To learn more about
              Cabin, click here.
            </p>

            <p>
              Design Declares collects emails and names via Brevo and will use
              the information you provide via Brevo to be in touch with you.
            </p>

            <p>
              We use the data collected by our website to monitor trends so that
              we can operate more effectively towards audience needs and
              expectations. Emails and names gathered via Brevo will be used to
              send updates and marketing related to Design Declares. This
              includes all subsidiaries and partnering agencies involved in the
              curation of Design Declares.
            </p>

            <p>
              We will not actively send your data anywhere globally, however,
              Cabin or Brevo may do this. Platforms such as these subscribe to
              the EU-US Privacy Shield framework which means that they agree to
              work with regulatory authorities to resolve any privacy-related
              complaints. These platforms are considered permitted destinations
              for personal data by the EU.
            </p>

            <p>
              We will retain your IP address for 90 days after which it is
              automatically removed. Emails via Brevo will be kept indefinitely
              to market products, services and insights related to Design
              Declares. You can unsubscribe and remove your personal details via
              Brevo at any time.
            </p>

            <p>
              If you have any questions or concerns about our use of your
              personal information, please let us know by sending an email to{" "}
              <a
                href="mailto:hello@designdeclares.com"
                className="underline text-white"
              >
                hello@designdeclares.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

     
      <Footer />

   
      <div className="fixed bottom-6 right-6 z-50">
        <ProgressChecker />
      </div>
    </div>
  );
}
