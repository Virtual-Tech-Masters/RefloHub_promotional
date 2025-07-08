import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Document = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: 'PIPEDA Compliance Statement',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: 7 July 2025</strong></p>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub FZ LLC ("Reflo Hub", "we", "our" or "us") is committed to safeguarding the privacy of individuals whose personal information we process in the course of commercial activities involving Canada. While our headquarters are located outside Canada, we voluntarily adhere to the Personal Information Protection and Electronic Documents Act (S.C. 2000, c. 5) ("PIPEDA").</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4"><strong>Head Office (Global):</strong><br />
        IFZA Business Park, (DDP)<br />
        PO Box 342001, Dubai, United Arab Emirates<br />
        <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
        <strong>Tel:</strong> 1-855-220-0505</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Reflo Hub does not maintain a physical presence or appointed representative in Canada. All privacy inquiries and requests should therefore be directed to us at the contact details above.</p>
        <h4 className="font-semibold mt-6">Scope of This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">This statement applies to personal information about identifiable individuals in Canada that we collect, use, or disclose in connection with our SaaS platform and related services. “Personal information” means information about an identifiable individual, excluding business contact information when used solely to communicate with that individual in relation to their employment or profession.</p>
        <h4 className="font-semibold mt-6">The Ten Fair Information Principles Under PIPEDA</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Accountability:</strong> We have appointed an internal Privacy Officer responsible for Reflo Hub’s compliance with PIPEDA. The Privacy Officer may delegate day-to-day activities but retains ultimate responsibility.</li>
          <li><strong>Identifying Purposes:</strong> We identify and document the purposes for which personal information is collected before or at the time of collection. Typical purposes include:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Registering user accounts (freelancers or businesses);</li>
              <li>Facilitating lead sharing, verification, and payouts;</li>
              <li>Fraud prevention (e.g., live photo KYC);</li>
              <li>Customer support and service improvement;</li>
              <li>Marketing communications (with consent);</li>
              <li>Legal, tax, and regulatory compliance.</li>
            </ul>
          </li>
          <li><strong>Consent:</strong> Reflo Hub obtains meaningful consent for the collection, use, or disclosure of personal information, except where inappropriate (e.g., legal or security requirements). Consent may be expressed (e.g., checkbox) or implied (e.g., continued use of the platform), depending on context and sensitivity. Individuals may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice.</li>
          <li><strong>Limiting Collection:</strong> We limit the collection of personal information to that which is necessary for the identified purposes. We do not collect information indiscriminately and avoid invasive methods.</li>
          <li><strong>Limiting Use, Disclosure, and Retention:</strong> Personal information is used and disclosed only for the purposes for which it was collected, unless the individual consents otherwise or as required by law. We retain personal information only as long as necessary to fulfil those purposes or to satisfy legal obligations, after which the information is securely destroyed, erased, or anonymised.</li>
          <li><strong>Accuracy:</strong> We take reasonable steps to ensure personal information is accurate, complete, and up-to-date for its intended use. Users can review and update their information through in-app settings or by contacting us.</li>
          <li><strong>Safeguards:</strong> Reflo Hub employs administrative, technical, and physical safeguards appropriate to the sensitivity of the information:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>TLS 1.3 encryption in transit; AES-256 encryption at rest;</li>
              <li>Role-based access control and multi-factor authentication for staff;</li>
              <li>Continuous vulnerability scanning and annual penetration testing;</li>
              <li>SOC 2–aligned security controls and ISO 27001-inspired policies;</li>
              <li>Secure data handling procedures for sub-processors.</li>
            </ul>
          </li>
          <li><strong>Openness:</strong> We make information about our privacy policies and practices readily available. This PIPEDA statement, our Privacy Policy, and related notices are accessible at <a href="http://www.reflohub.com/privacy" className="text-orange-400 dark:text-orange-300 hover:underline">www.reflohub.com/privacy</a>.</li>
          <li><strong>Individual Access:</strong> Upon written request and identity verification, we will inform individuals of the existence, use, and disclosure of their personal information and provide access within 30 days. Individuals may request corrections, and we will amend the information where appropriate.</li>
          <li><strong>Challenging Compliance:</strong> Individuals may address concerns regarding Reflo Hub’s compliance with PIPEDA to our Privacy Officer via <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>. We investigate all complaints and respond in writing. If a complaint is justified, we will take appropriate corrective action. Unresolved complaints may be escalated to the Office of the Privacy Commissioner of Canada (OPC).</li>
        </ol>
        <h4 className="font-semibold mt-6">Cross-Border Data Transfers</h4>
        <p className="text-gray-600 dark:text-gray-300">Personal information may be processed outside Canada, including in the United Arab Emirates, the European Union, and the United States. While in another jurisdiction, information may be accessed by courts, law enforcement, and national security authorities. We use contractual safeguards and industry-standard security to protect data during such transfers.</p>
        <h4 className="font-semibold mt-6">Data Retention Schedule (Canada-Relevant)</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention Period</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Disposal Method</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years after account closure</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure deletion / crypto erasure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years post closure</td><td className="border border-gray-300 dark:border-gray-600 p-2">De-identification or deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Support Tickets</td><td className="border border-gray-300 dark:border-gray-600 p-2">2 years after resolution</td><td className="border border-gray-300 dark:border-gray-600 p-2">Secure deletion</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">KYC Documents</td><td className="border border-gray-300 dark:border-gray-600 p-2">30 days post verification</td><td className="border border-gray-300 dark:border-gray-600 p-2">Irreversible erasure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Audit Logs</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months</td><td className="border border-gray-300 dark:border-gray-600 p-2">Log rotation & deletion</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-6">Automated Decision Making</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub does not make decisions producing legally significant effects solely through automated means. Our AI-based MatchScore™ assists human users but final decisions rest with businesses or freelancers.</p>
        <h4 className="font-semibold mt-6">Responding to Data Breaches</h4>
        <p className="text-gray-600 dark:text-gray-300">In the event of a breach involving personal information that poses a real risk of significant harm, we will notify affected individuals and the OPC as soon as feasible, outlining the nature of the breach, the information involved, and measures taken.</p>
        <h4 className="font-semibold mt-6">Updates to This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">We may amend this PIPEDA Compliance Statement periodically. Material changes will be communicated via email or in-app notification. The "Last updated" date reflects the latest revision.</p>
        <h4 className="font-semibold mt-6">Contact – Privacy Officer</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy Officer<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
      `,
    },
    {
      title: 'CCPA & CPRA Notice',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: 7 July 2025</strong></p>
        <p className="text-gray-600 dark:text-gray-300">This California Consumer Privacy Act and California Privacy Rights Act Notice (collectively, the “CCPA Notice”) supplements the information contained in the Reflo Hub Privacy Policy and applies solely to California residents (“Consumers” or “you”). It explains how Reflo Hub FZ LLC (“Reflo Hub,” “we,” “our,” or “us”) collects, uses, discloses, and retains Personal Information (“PI”) subject to the CCPA as amended by the CPRA (Cal. Civ. Code § 1798.100 et seq.).</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          <strong>Reflo Hub is headquartered at:</strong><br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, (DDP)<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Although our principal place of business is outside the United States, we may process PI of California residents who use our platform. We do not maintain a physical presence in California and have no appointed CCPA representative; all requests should be directed to the address or email above.</p>
        <h4 className="font-semibold mt-6">1. Definitions</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Information (PI):</strong> Information that identifies, relates to, describes, or could reasonably be linked with a particular California consumer or household.</li>
          <li><strong>Sensitive Personal Information (SPI):</strong> PI that is granted heightened protection under CPRA (e.g., government IDs, precise geolocation, financial account credentials).</li>
          <li><strong>Sale:</strong> Transferring PI to a third party for monetary or other valuable consideration.</li>
          <li><strong>Sharing:</strong> Disclosing PI to a third party for cross-context behavioral advertising.</li>
        </ul>
        <h4 className="font-semibold mt-6">2. Notice at Collection</h4>
        <p className="text-gray-600 dark:text-gray-300">The table below identifies the categories of PI we may collect, examples, sources, business/commercial purposes, whether we “sell” or “share” the PI, and the retention period.</p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">CCPA Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Examples</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Sources</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Business/Commercial Purpose</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Sold?</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Shared?</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">A. Identifiers</td><td className="border border-gray-300 dark:border-gray-600 p-2">Name, alias, postal address, unique user ID, email, IP address</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer; automatic</td><td className="border border-gray-300 dark:border-gray-600 p-2">Account creation, authentication, security</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 yrs post closure</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">B. Customer Records</td><td className="border border-gray-300 dark:border-gray-600 p-2">Billing address, payout bank details, tax IDs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer</td><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processing, payouts, tax compliance</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 yrs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">C. Protected Class Attributes</td><td className="border border-gray-300 dark:border-gray-600 p-2">None intentionally collected</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">D. Commercial Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">Subscription history, coin purchases</td><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processor</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provide services, analytics</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 yrs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">E. Biometric Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">Live selfie for KYC (facial image)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer</td><td className="border border-gray-300 dark:border-gray-600 p-2">Identity verification, fraud prevention</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">Deleted after match or 30 days</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">F. Internet/Network Activity</td><td className="border border-gray-300 dark:border-gray-600 p-2">Device type, referrer URL, session logs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatic</td><td className="border border-gray-300 dark:border-gray-600 p-2">Platform analytics, security</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 mos</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">G. Geolocation (coarse)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Country/region from IP</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatic</td><td className="border border-gray-300 dark:border-gray-600 p-2">Localization, security</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 mos</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">H. Audio/Visual</td><td className="border border-gray-300 dark:border-gray-600 p-2">Support call recordings, uploaded screenshots</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer</td><td className="border border-gray-300 dark:border-gray-600 p-2">Support, quality assurance</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">2 yrs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">I. Employment Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">Business category, role</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer</td><td className="border border-gray-300 dark:border-gray-600 p-2">Matching engine, payouts</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 yrs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">J. Education Information</td><td className="border border-gray-300 dark:border-gray-600 p-2">None collected</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td><td className="border border-gray-300 dark:border-gray-600 p-2">—</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">K. Inferences</td><td className="border border-gray-300 dark:border-gray-600 p-2">User tier, referral score</td><td className="border border-gray-300 dark:border-gray-600 p-2">Internal analytics</td><td className="border border-gray-300 dark:border-gray-600 p-2">Personalization, fraud detection</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 yrs</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">L. Sensitive PI</td><td className="border border-gray-300 dark:border-gray-600 p-2">Government ID (passport/driver’s license); selfie</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consumer</td><td className="border border-gray-300 dark:border-gray-600 p-2">KYC/AML compliance</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">No</td><td className="border border-gray-300 dark:border-gray-600 p-2">Deleted after verification or 30 days</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-4">Purposes Explained</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Service Provision & Transaction Processing</li>
          <li>Security & Integrity (fraud detection, bug tracking)</li>
          <li>Debugging & Error Repair</li>
          <li>Analytics & Product Improvement</li>
          <li>Marketing (only with opt-in consent; no cross-context ad sharing)</li>
          <li>Legal & Regulatory Compliance</li>
        </ol>
        <h4 className="font-semibold mt-6">3. Sale or Sharing of Personal Information</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub does not sell PI for monetary consideration. We also do not share PI for cross-context behavioral advertising. If this changes, we will update this CCPA Notice and provide a “Do Not Sell or Share My Personal Information” mechanism before any such activity begins.</p>
        <h4 className="font-semibold mt-6">4. Your CCPA Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">California residents have the following rights, subject to verification and certain limitations:</p>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mt-4">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Right</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Know</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request disclosure of the categories and specific pieces of PI we have collected, the categories of sources, business purpose, and third parties to whom we disclose PI (past 12 months).</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Delete</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request deletion of PI we collected, subject to exceptions (e.g., legal obligations, security incidents).</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Correct</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request correction of inaccurate PI.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Opt Out of Sale/Sharing</td><td className="border border-gray-300 dark:border-gray-600 p-2">Request that we do not sell or share PI. (Currently not applicable as we do not sell/share PI.)</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Limit Use/Disclosure of SPI</td><td className="border border-gray-300 dark:border-gray-600 p-2">Limit our use of Sensitive PI to that which is “necessary and proportionate.” We already restrict SPI to essential KYC purposes.</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Right to Non-Discrimination</td><td className="border border-gray-300 dark:border-gray-600 p-2">We will not deny services, charge different prices, or provide a different level/quality of service if you exercise your CCPA rights.</td></tr>
          </tbody>
        </table>
        <h4 className="font-semibold mt-6">5. How to Exercise Your Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">You or an authorized agent may submit verifiable consumer requests via:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Web Form:</strong> <a href="http://reflohub.com/privacy-request" className="text-orange-400 dark:text-orange-300 hover:underline">reflohub.com/privacy-request</a></li>
          <li><strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a></li>
          <li><strong>Toll-Free Number:</strong> 1-855-220-0505 (available Mon–Fri, 9 AM–5 PM PT)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We will confirm receipt within 10 business days and respond within 45 calendar days (or extend once by 45 days with notice). We will verify your identity by matching credentials (e.g., email confirmation, two-factor challenge). Authorized agents must provide signed permission and may be required to verify both their identity and yours.</p>
        <h4 className="font-semibold mt-6">6. Sensitive Personal Information Usage Policy</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub only uses Sensitive PI for:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Identity Verification (passport/ID & selfie)</li>
          <li>Fraud Prevention & Security</li>
          <li>Legal/Regulatory Compliance (KYC/AML)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We do not use Sensitive PI for inferring characteristics. You may request limitation of Sensitive PI use; however, certain services (e.g., payouts) may be unavailable without it.</p>
        <h4 className="font-semibold mt-6">7. Data Retention</h4>
        <p className="text-gray-600 dark:text-gray-300">We retain PI only as long as reasonably necessary for the purposes disclosed in this CCPA Notice, or as required by law (see retention table in Section 2).</p>
        <h4 className="font-semibold mt-6">8. Children’s Privacy</h4>
        <p className="text-gray-600 dark:text-gray-300">Our services are not directed to children under 16. We do not knowingly collect PI from minors. If we learn that we have inadvertently collected such data, we will delete it.</p>
        <h4 className="font-semibold mt-6">9. Updates to This CCPA Notice</h4>
        <p className="text-gray-600 dark:text-gray-300">We may update this CCPA Notice to reflect changes in the law or our practices. Material changes will be announced on our website or via email. The “Last updated” date at the top indicates the most recent revision.</p>
        <h4 className="font-semibold mt-6">10. Contact Us</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Privacy Team – CCPA Inquiries<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
      `,
    },
    {
      title: 'GDPR Compliance Statement',
      content: `
        <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Last updated: 7 July 2025</strong></p>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub FZ LLC ("Reflo Hub", "we", "our" or "us") is committed to protecting the privacy and security of personal data entrusted to us. Although our headquarters are located outside the European Economic Area (EEA), we process personal data relating to users in the EEA and therefore comply with Regulation (EU) 2016/679 (the "GDPR").</p>
        <h4 className="font-semibold mt-6">1. Controller Details</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Reflo Hub FZ LLC<br />
          IFZA Business Park, (DDP)<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a>
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Reflo Hub is incorporated as a private limited company under the Dubai Integrated Economic Zones Implementing Regulations 2023. We do not maintain an establishment within the EU/EEA and, pursuant to Art. 27 GDPR, we have elected not to appoint an EU representative. All GDPR-related inquiries should therefore be directed to us at the address above.</p>
        <h4 className="font-semibold mt-6">2. Key Definitions</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person.</li>
          <li><strong>Processing:</strong> Any operation performed on personal data (collection, storage, use, disclosure, etc.).</li>
          <li><strong>Data Subject:</strong> The individual to whom the personal data relates.</li>
          <li><strong>Controller:</strong> The entity that determines the purposes and means of processing personal data.</li>
        </ul>
        <h4 className="font-semibold mt-6">3. Categories of Personal Data We Collect</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Category</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Examples</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Name, email, password hash, role (freelancer/business)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Profile & Business Info</td><td className="border border-gray-300 dark:border-gray-600 p-2">Industry, location, website, payout details, tax IDs</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Prospect contact details, deal value, referral link metadata</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by freelancer or imported via integrations</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Transaction Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Subscription records, invoices, payout history</td><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processor, user activity</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Usage Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Log files, IP address, device/browser type, pages visited, actions taken</td><td className="border border-gray-300 dark:border-gray-600 p-2">Automatically collected</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing Preferences</td><td className="border border-gray-300 dark:border-gray-600 p-2">Email opt-ins, notification settings</td><td className="border border-gray-300 dark:border-gray-600 p-2">Provided by user</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We do not intentionally collect special category data (Art. 9 GDPR) or data on children under 16.</p>
        <h4 className="font-semibold mt-6">4. Lawful Bases for Processing (Art. 6 GDPR)</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Purpose</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Lawful Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account creation & platform operation</td><td className="border border-gray-300 dark:border-gray-600 p-2">Contract (Art. 6 (1)(b))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Fraud prevention, security & compliance</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (Art. 6 (1)(f)) and Legal Obligation (Art. 6 (1)(c))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Payment processing & payouts</td><td className="border border-gray-300 dark:border-gray-600 p-2">Contract</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing communications & newsletters</td><td className="border border-gray-300 dark:border-gray-600 p-2">Consent (Art. 6 (1)(a))</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Product analytics & service improvement</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (pseudonymised/aggregated where possible)</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">AI-driven lead matching (MatchScore™)</td><td className="border border-gray-300 dark:border-gray-600 p-2">Legitimate Interests (no legal or similarly significant effect on data subjects)</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Where we rely on legitimate interests, we have performed balancing tests to ensure such interests do not override data subject rights.</p>
        <h4 className="font-semibold mt-6">5. How We Use Personal Data</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Provision of Services:</strong> To register accounts, facilitate lead sharing, display dashboards, and enable payments between freelancers and businesses.</li>
          <li><strong>Verification & Anti-Fraud:</strong> To verify identities (live photo KYC), detect spam leads, and maintain platform integrity.</li>
          <li><strong>Customer Support:</strong> To respond to tickets, resolve disputes, and improve user experience.</li>
          <li><strong>Marketing & Product Updates:</strong> To send newsletters or promotional content where consent has been given.</li>
          <li><strong>Analytics:</strong> To understand platform performance, optimise features, and conduct A/B testing.</li>
        </ol>
        <p className="text-gray-600 dark:text-gray-300 mt-4">We do not sell personal data, nor do we engage in automated decision-making that produces legal or similarly significant effects.</p>
        <h4 className="font-semibold mt-6">6. International Data Transfers (Chapter V GDPR)</h4>
        <p className="text-gray-600 dark:text-gray-300">Personal data are stored and processed on AWS infrastructure in the United Arab Emirates and occasionally in other regions (e.g., EU-West) for redundancy. Where data are transferred out of the EEA, we implement one or more of the following safeguards:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Standard Contractual Clauses (SCCs) adopted by the European Commission.</li>
          <li>Pseudonymisation and encryption in transit and at rest.</li>
          <li>Data processing agreements with sub-processors that ensure GDPR-level protection.</li>
        </ul>
        <h4 className="font-semibold mt-6">7. Data Retention (Art. 5 (1)(e))</h4>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Data Type</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Account & Transaction Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">7 years after account closure (for tax & audit)</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Lead & Referral Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">3 years after lead is closed, rejected, or inactive</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Marketing Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">Until opt-out or 2 years after last interaction</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Log & Security Data</td><td className="border border-gray-300 dark:border-gray-600 p-2">12 months, unless required for investigations</td></tr>
          </tbody>
        </table>
        <p className="text-gray-600 dark:text-gray-300 mt-4">Data may be retained longer where necessary to establish, exercise, or defend legal claims.</p>
        <h4 className="font-semibold mt-6">8. Data Security (Art. 32)</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>TLS 1.3 encryption in transit; AES-256 at rest</li>
          <li>Role-based access control and MFA for staff</li>
          <li>Annual penetration tests and continuous vulnerability scanning</li>
          <li>ISO 27001-aligned policies and SOC 2 controls</li>
          <li>Daily encrypted backups with 30-day point-in-time recovery</li>
        </ul>
        <h4 className="font-semibold mt-6">9. Data Subject Rights (Arts. 12–22)</h4>
        <p className="text-gray-600 dark:text-gray-300">Data subjects in the EEA have the right to:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Access:</strong> Obtain confirmation and a copy of personal data we hold.</li>
          <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> Request deletion where grounds apply ("right to be forgotten").</li>
          <li><strong>Restriction:</strong> Limit processing under certain conditions.</li>
          <li><strong>Portability:</strong> Receive data in a structured, machine-readable format.</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
          <li><strong>Withdraw Consent:</strong> At any time, without affecting prior processing.</li>
        </ol>
        <h4 className="font-semibold mt-6">10. Exercising Your Rights</h4>
        <p className="text-gray-600 dark:text-gray-300">To exercise any of the rights listed above, please email <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a> with the subject line “GDPR Request.” We will respond within 30 days. We may require identity verification before fulfilling your request.</p>
        <p className="text-gray-600 dark:text-gray-300 mt-4">If you believe we have not complied with GDPR, you may lodge a complaint with your local supervisory authority. We would, however, appreciate the chance to address your concerns first.</p>
        <h4 className="font-semibold mt-6">11. Cookies & Tracking Technologies</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub uses cookies, SDKs, and pixels to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Maintain user sessions and security</li>
          <li>Remember preferences</li>
          <li>Measure platform analytics</li>
          <li>Facilitate marketing (with consent)</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 mt-4">For details, see our <a href="http://www.reflohub.com/cookies" className="text-orange-400 dark:text-orange-300 hover:underline">Cookie Policy</a>.</p>
        <h4 className="font-semibold mt-6">12. Children’s Privacy</h4>
        <p className="text-gray-600 dark:text-gray-300">Reflo Hub is not directed at children under 16. We do not knowingly process personal data of minors. If we become aware that such data have been collected, we will delete them promptly.</p>
        <h4 className="font-semibold mt-6">13. Changes to This Statement</h4>
        <p className="text-gray-600 dark:text-gray-300">We may update this GDPR Compliance Statement from time to time. Material changes will be notified via email or in-app notice. The "Last updated" date at the top indicates when the latest amendments were made.</p>
        <h4 className="font-semibold mt-6">14. Contact Us</h4>
        <p className="text-gray-600 dark:text-gray-300">
          Data Protection Lead<br />
          Reflo Hub FZ LLC<br />
          IFZA Business Park, DDP<br />
          PO Box 342001, Dubai, United Arab Emirates<br />
          <strong>Email:</strong> <a href="mailto:privacy@reflohub.com" className="text-orange-400 dark:text-orange-300 hover:underline">privacy@reflohub.com</a><br />
          <strong>Tel:</strong> 1-855-220-0505
        </p>
      `,
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } },
  };

  return (
    <section className="relative min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-hidden perspective-1000 font-sans">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 dark:from-gray-950 via-gray-200 dark:via-gray-900 to-gray-100 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-orange-300/10 dark:from-sky-500/10 dark:to-orange-300/10 animate-[gradient-shift_25s_ease_infinite] bg-[length:200%_200%]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-300/70 rounded-full blur-md"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5], x: Math.random() * 80 - 40, y: Math.random() * 80 - 40 }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse', delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-full px-6 py-2 mb-6 shadow-[0_0_30px_rgba(255,165,0,0.4)]"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }}
          >
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Privacy Compliance</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-500 to-orange-300 bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,165,0,0.7)] animate-[pulse_3s_ease_infinite]">
            Privacy & Data Protection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflo Hub is committed to protecting your privacy and ensuring compliance with global data protection regulations, including PIPEDA, CCPA/CPRA, and GDPR.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div variants={sectionVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <p className="text-gray-500 dark:text-gray-400 mb-6">Last Updated: 2025-07-07</p>
          {sections.map((section, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-100/60 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-orange-300/40 rounded-lg overflow-hidden"
            >
              <motion.button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white hover:bg-orange-300/10 transition-all duration-300"
                onClick={() => toggleSection(index)}
                whileHover={{ scale: 1.01 }}
              >
                <span>{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="px-6 py-4 text-gray-600 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-orange-400 dark:text-orange-300 mb-4">Have Questions?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact our Privacy Team for inquiries about our data protection practices or compliance statements.
          </p>
          <motion.a
            href="mailto:privacy@reflohub.com"
            variants={{ hover: { scale: 1.05, boxShadow: '0 0 40px rgba(255, 165, 0, 0.5)' }, tap: { scale: 0.95 } }}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex px-8 py-4 text-white bg-gradient-to-r from-sky-500 to-orange-300 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Contact Privacy Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </motion.a>
        </motion.div>

        {/* SEO Metadata */}
        <motion.div className="hidden">
          <meta name="title" content="Reflo Hub – Privacy Compliance Statements" />
          <meta
            name="description"
            content="Explore Reflo Hub’s compliance with PIPEDA, CCPA/CPRA, and GDPR, ensuring transparent and secure handling of personal data for our SaaS platform users."
          />
          <meta
            name="keywords"
            content="Reflo Hub privacy, PIPEDA compliance, CCPA notice, GDPR compliance, data protection, personal information, privacy policy, SaaS platform"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Document;