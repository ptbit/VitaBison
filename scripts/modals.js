//CONTACT US
const contactUsHTML = `
<div class="footer__modal">
<p>Company Name: Nutra Base Team</p>
<p>Call Us: +1 (833) 741-2316</p>
<p>Email Us: support@vitabison.com</p>
</div>
`;
const contactUsBtn = document.getElementById('contactUs');

contactUsBtn.addEventListener('click', () => {
  Swal.fire({
    title: `<p class="footer__modal-title">Contact Us</p>`,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    showCloseButton: true,
    showConfirmButton: false,
    html: contactUsHTML,
  });
});

//Terms and Conditions
const termsHTML = `
<div class="footer__modal">
<h4>1. SCOPE &amp; APPLICATION&nbsp;</h4>
<p>1.1 You expressly agree and accept the Conditions set forth herein
    unconditionally as a binding contract ("the Agreement") enforceable by
    law. The following are the terms and conditions of participation in the
    VitaBison Gummies, Subscription ("Subscription")
    or any other Product on this Site, all such references to Subscription
    or Product combined shall be ("Product"). "Customer", "I", "You" or
    "Your" refers to you. "Site" means this World Wide Website located at
    the URL or VitaBison Gummies , ("We",
    "Us" or "Our") reserves the right to amend this Agreement from time to
    time. It is agreed that any such amendment will apply to Customer. VitaBison Gummies agrees to inform Customer of any amendment to the agreement.
    Should Customer fail to object
    to any amendment to the Agreement within one week, such failure shall
    serve as an acceptance of the amendment.
</p>
<h4>2. PRODUCT AND BILLING</h4>
<p>2.1 All product purchases made from this website are required to be paid
    in full.
    <br><br>2.1.1. The prices for the products are as follows: 238.99(+ free
    S&amp;H) for the 6 bottle package (39.99 bottle); 189.49 (+ free
    S&amp;H) for the 4 bottle package (47.49 bottle); 129.49 (+ S&amp;H) for
    the 2 bottle package (64.99 bottle).
    <br><br>2.3.1 You authorize us to initiate a one-time charge to your
    credit card as indicated upon your purchase.
    <br><br>2.3.2 Your product will ship within 24 hours and will arrive
    within 5-7 business days. If your product does not arrive within the
    allotted amount of time, please call customer service to address the
    delay. Although we always strive to
    make our deliveries as timely as possible, circumstances may arise
    outside of our control, such as inclement weather, natural disasters, or
    other postal delays, which may impede a the timely arrival of your
    product. You agree we are not liable
    for such delays.
    <br><br>2.4 Please contact Customer service at TOLL FREE&nbsp;<span class="phone-line">(877)-204-2595</span> between the hours of 8am
    EST - 8pm EST Mon - Sun with any questions regarding your product,
    payment or return.
    <br><br>2.5.1 Additional Opt-in Product: VitaBisonTestoBooster, if
    purchased, will be shipped within 24 hours and arrive within 5-7
    business days. You are ordering a 30 day supply and will be charged
    $60.00 (+ free S&amp;H) for the product you
    receive. This purchase is backed by a 100% Money Back Guarantee. If at
    some point you choose to cancel this purchase, call customer service at
    <span class="phone-line">(877)-204-2595</span> anytime between .
</p>
<h4>3. RETURNS, CANCELLATION, AND REFUND POLICY REFUND POLICY.</h4>
<p> 3.1 Please note that calling for a refund does not automatically
    guarantee approval. Our Customer Service team will carefully evaluate
    your request according to our refund policy and guidelines. We retain
    the right to decline refund requests that
    do not meet our specified criteria.
    <br><br>3.2 We care about your well-being. If you have a medical
    condition, are pregnant, or suspect pregnancy within the next 60 days,
    we advise against ordering this product. For these reasons, refund
    requests will not be accepted. If you are
    uncertain about whether this product is suitable for you, kindly consult
    a physician before placing an order.
    <br><br>3.3 To better serve our customers, we have made a policy update.
    Starting now, we offer partial refunds for eligible transactions with no
    returns required. Please note that returns will not be accepted under
    any circumstances.
</p>
<h4>4. DISPUTE RESOLUTION</h4>
<p>4.1 If you have any dispute concerning any aspect of these Terms of
    Website Use, the Website, or any of our services, you agree to submit
    your dispute for resolution by arbitration before the American
    Arbitration Association ("AAA") in the county
    where you live by filing a Demand for Arbitration. The arbitrator will
    have exclusive authority to resolve any dispute including any claim that
    all or any part of these Terms of Website Use are unenforceable.
    <br><br>4.2 Opt-Out of Arbitration/Class Action Waiver. The Terms &amp;
    Conditions do not constitute a waiver of any of your rights and remedies
    to pursue a claim individually and not as a class action in binding
    arbitration as provided above.
    This provision preventing you from bringing, joining or participating in
    class action lawsuits is an independent agreement.
    <br><br>4.3 YOU ACKNOWLEDGE AND AGREE THAT, VIA YOUR ACCEPTANCE OF THESE
    DISPUTE RESOLUTION PROVISIONS, YOU WAIVE ANY RIGHT TO A JURY TRIAL, AS
    WELL AS YOUR RIGHT TO BRING, JOIN OR PARTICIPATE AS A PLAINTIFF OR A
    CLASS MEMBER IN A CLASS ACTION
    SUIT OR MULTI-PARTY ARBITRATION BROUGHT AGAINST US, ANY PERSON RELATED
    TO US OR A SERVICE PROVIDER USED BY US TO PROVIDE THE SERVICE.
    <br><br>4.4 You agree to indemnify for any financial harm or any losses
    caused by Your objections to fees that does not comply with this
    Section. You will be held responsible for the reimbursement of any fees
    and losses incurred as a result of
    Your failure to comply with any provision in this Agreement.
    <br><br>4.5 Credit Card Billing Customer expressly agrees that if
    Customer pays by credit card, check or demand debit, Customer shall
    abide by the following statement: "I hereby authorize to initiate
    debit/credit entries to my bank deposit account
    or credit card."
</p>
<h4>5. OFFER, ACKNOWLEDGMENT AND ACCEPTANCE</h4>
<p>5.1 While we make every effort to ensure that items appearing on the Site
    are available, we cannot guarantee that all items are in stock or
    immediately available when you submit your order. We may reject Your
    order (without liability) if We are unable
    to process or fulfill it. If this is the case, We will refund any prior
    payment that you have made for that item.&nbsp;
    <br><br>5.2 An order submitted by You constitutes an offer by You to Us
    to purchase the Subscription on these Conditions and is subject to Our
    subsequent acceptance.
    <br><br>5.3 Prior to such acceptance, an automatic e-mail
    acknowledgement of Your order may be generated. Please note that any
    such automatic acknowledgement does not constitute a formal acceptance
    of Your order.&nbsp;
    <br><br>5.4 Our acceptance of Your order takes effect and the contract
    concluded at the point where such offer is expressly accepted by Us
    dispatching Your order and accepting Your credit card or other payment
    ("Acceptance").&nbsp;
    <br><br>5.5 We may keep records of orders received, acknowledgements,
    acceptances and other contract records for a reasonable period after
    Acceptance. We may be able to provide You with copies on written
    request; however You must make sure you
    print a copy of all such documents and these Conditions for your own
    records.&nbsp;
</p>
<h4>6. YOUR REPRESENTATIONS&nbsp;</h4>
<p>6.1 You represent that the information provided by You when placing Your
    order is up-to-date, materially accurate, and is sufficient for Us to
    fulfill your order. You are responsible for maintaining and promptly
    updating Your account information with
    Us for accuracy and completeness and keeping such information (and any
    passwords given to You for the purposes of accessing the Site and/or
    purchasing Products) secure against unauthorized access. Unless agreed
    otherwise or required by applicable
    law, any warranties provided in relation to Your purchase only extend to
    You on the understanding that You are a user and not a reseller of the
    Product.&nbsp;
    <br><br>6.2 No warranty, commitment or any other obligation should ever
    be assumed by You on Our behalf or on behalf of a Product manufacturer,
    license or supplier without Our express prior written consent.
    <br><br>6.3 PRICE AND TERMS OF PAYMENT (NOTE: WE CANNOT CONFIRM PRICES
    PRIOR TO ACCEPTANCE OF YOUR ORDER)
    <br><br>6.4 Prices payable for the Product are those in effect at the
    time of dispatch or delivery, unless otherwise expressly agreed. Prices
    may be indicated on the Site or an order acknowledgement but the
    authoritative price in the event of
    any discrepancy, is the price that is notified to You on Our Acceptance.
    <br><br>6.5 We have the right at any time prior to Our Acceptance to
    withdraw any discount and/or to revise prices to take into account
    increases in costs including (without limitation) costs of any
    materials, carriage, labor or the increase or
    imposition of any tax, duty or other levy and any variation in exchange
    rates. We also reserve the right to notify You of any mistakes in
    Product descriptions or errors in pricing prior to product dispatch. In
    such event if you choose to continue
    with fulfillment of the order, You acknowledge that the Product or
    Service will be provided in accordance with such revised description or
    corrected price.
    <br><br>6.6 The places that we deliver to are listed on the Site
    ("Territory"). Unless otherwise specified, prices quoted are: exclusive
    of the costs of shipping or carriage to the agreed place of delivery
    within the Territory (charges for which
    are stated on the Site); and exclusive of VAT and any other tax or duty
    which (where applicable) must be added to the price payable.
    <br><br>6.7 You agree to pay for taxes, shipping or carriage of Products
    as such costs are specified by Us on the Site when You submit Your
    purchase order. Payment shall be made prior to delivery and by such
    methods as are indicated on the Site.
    <br><br>6.8 Except as expressly provided elsewhere in these Conditions
    or the Site, payment may be taken in full notwithstanding any claim for
    short delivery or defects.
    <br>6.9 We will charge credit or debit cards on dispatch of the Product
    or commencement of Services. We reserve the right to verify credit or
    debit card payments prior to Acceptance.
    <br><br>6.10 If at any time you fail to pay any amount due on the
    relevant due date, or we are unable to collect payment due because of
    lack of funds or cancelled credit card, We may by notice declare all
    amounts unpaid at that date to be immediately
    due and payable. No counterclaim or set-off may be deducted from any
    payment due without our written consent. We may also take action against
    You for the price of Products at any time after payment has become due
    even though property in those
    Products may not yet have passed to you.
</p>
<h4>7. TERMINATION</h4>
<p>7.1 If You commit an act of bankruptcy or enter into a deed of
    arrangement with creditors or a court order for winding-up is made
    against You or You take or suffer any similar action in consequence of
    debt or We have cause to believe that You are
    unable to pay Your debts as they fall due; or You fail to pay any amount
    by the due date or breach any of these Conditions then, without
    prejudice to any of our other rights, we may:
    <br><br>7.1.1 Stop any Products in transit; and/or
    <br><br>7.1.2 Suspend further Product deliveries; and/or
    <br><br>7.1.3 Stop or suspend provision of Services; and/or
    <br><br>7.1.4 By written notice, terminate Your order and all or any
    other contracts between Us and You.&nbsp;
</p>
<h4>8. DELIVERY AND RISK</h4>
<p>8.1 Delivery timescales/dates specified on the Site, in any order
    acknowledgement, acceptance or elsewhere are estimates only. While We
    endeavor to meet such timescales or dates, We do not undertake to
    dispatch Products and/or commence Services by
    a particular date or dates and shall not be liable to You in respect of
    delays or failure to do so. IF OUR PRODUCTS FAIL TO ARRIVE IN THE
    ESTIMATED DELIVERY TIME OF 5-7 BUSINESS DAYS, PLEASE CONTACT OUR
    CUSTOMER SERVICE LINE AND LET THEM KNOW.
    <br><br>8.2 Delivery shall be to a valid address within the Territory
    submitted by You and subject to Acceptance ("Delivery Address"). You
    must check the Delivery Address on any acknowledgement or acceptance We
    provide and notify Us without delay
    of errors or omissions. We reserve the right to charge You for any extra
    costs arising from changes You make to the Delivery Address after You
    submit an order.
    <br><br>8.3 If You refuse or fail to take delivery of Products provided
    in accordance with these Conditions, any risk of loss or damage to the
    Products shall nonetheless pass and without prejudice to any other
    rights or remedies We have:
    <br><br>8.3.1 We shall be entitled to immediate payment in full for the
    Products or Services delivered and either to effect delivery by whatever
    means We consider appropriate or to store Products at Your risk;
    <br><br>8.3.2 You shall be liable pay on demand all costs of Product
    storage and any additional costs incurred as a result of such refusal or
    failure to take delivery; and
    <br>8.3.3 We shall be entitled 30 days after the agreed date for
    delivery to dispose of Products in such manner as We determine and may
    set off any proceeds of sale against any sums due from You.
    <br><br>8.4 Except to the extent required as a result of any mandatory
    rights You have as a consumer under applicable law, You shall not be
    entitled to reject the Products in whole or in part by reason of short
    delivery and shall pay in full notwithstanding
    short delivery or non-delivery unless You notify us in writing of any
    claim within 7 days of the latest of the date of receipt of the relevant
    invoice or delivery whereupon You shall pay for the quantity actually
    delivered.
    <br><br>8.5 Where We deliver Products by installments, each installment
    constitutes a separate contract and any defect in any one or more
    installments shall not entitle You to repudiate the contract as a whole
    nor to cancel any subsequent installment.
    <br><br>8.6 Save as otherwise provided in these Conditions, risk of loss
    of or damage to the Products passes to You on delivery or when placed in
    your possession or that of any carrier or transport provided by You,
    whichever shall occur first.
</p>
<h4>9. REJECTION, DAMAGE OR LOSS IN TRANSIT&nbsp;</h4>
<p>9.1 Except as set out above and subject to any rights You have under
    applicable law that cannot be excluded or limited by these Conditions:
    <br><br>9.1.1 We shall not be liable and You shall not be entitled to
    reject Products or Services, except for: (a) damage to or loss of
    Products or any part thereof in transit (where the Products are carried
    by Our own transport or by a carrier
    on Our behalf) where notified to Us within 5 working days of receipt of
    the Products; (b) defects in Products (not being defects caused by any
    act, neglect or default on your part) notified in writing to Us within
    30 days of receipt of the Products;
    and (c) defective performance of Services (not being defects caused by
    any act, neglect or default on Your part) where notified in writing to
    Us within 5 days of such defect becoming apparent.
    <br><br>9.1.2 We shall not be liable for any damage or losses arising
    from the use of the Products in connection with other defective or
    unsuitable Products; Your negligence; improper use or use in any manner
    inconsistent with the manufacturer's
    specifications or instructions.
    <br><br>9.1.3 Where these is a shortage or failure to deliver, or any
    defect in or damage to a Product or Service, We may at our option: (a)
    (in the case of Product shortage or non-delivery) make good any such
    shortage or non-delivery; and/or
    (b) in the case of failure to perform or defective performance of a
    Service, make good such failure or defective performance; and/or (c) in
    the case of damage or any defect(s) in the Product and in accordance
    with any applicable Returns Policy:
    (i) replace or repair the Product upon You returning the Product; or
    (ii) refund the price paid in respect of any Products found to be
    damaged or defective.
</p>
<h4>10. LIABILITY LIMITATION</h4>
<p>10.1 TO THE MAXIMUM EXTENT LEGALLY PERMITTED, WHETHER OR NOT WE WERE
    AWARE OR ADVISED OF THE POSSIBILITY OF DAMAGES, AND WHETHER OR NOT THE
    LIMITED REMEDIES PROVIDED HEREIN FAIL OF THEIR ESSENTIAL PURPOSE (1) OUR
    AGGREGATE LIABILITY (WHETHER FOR BREACH
    OF CONTRACT, TORT OR ANY OTHER LEGAL THEORY) SHALL IN NO CIRCUMSTANCES
    EXCEED THE COST OF THE PRODUCTS YOU ORDERED AND THAT ARE MOST CLOSELY
    RELATED TO YOUR DAMAGES AND (2) WE SHALL NOT BE LIABLE FOR SPECIAL,
    INCIDENTAL, INDIRECT, OR CONSEQUENTIAL
    DAMAGES, LOST PROFITS, LOST REVENUE, OR COST OF COVER.
    <br><br> 10.2 VitaBison Gummies, in its sole discretion, shall not be
    liable for a chance occurrence or unavoidable or uncontrollable accident
    beyond either parties control that prevents our ability to fulfill
    obligations under the contract.
</p>
<h4>11. THIRD PARTY RIGHTS</h4>
<p>11.1 You shall indemnify Us against any and all liabilities, claims and
    costs incurred by or made against Us as a direct or indirect result of
    us performing Services or carrying out any work on or to the Products
    where this has been done to Your (or
    Your representative's) specific requirements or specifications causing
    an infringement or alleged infringement of any proprietary rights of any
    third party.
    <br><br>11.2 To the fullest extent permitted by law, we shall have no
    liability to You in the event the Products or Services infringing or
    being alleged to infringe the proprietary rights of any third party. In
    the event that the Products are
    or may be the subject of patent, copyright, database right, registered
    design, trademark or other rights of any third party, You should refer
    to the relevant terms of the Product manufacturer and/or licensor/owner.
    We shall be obliged to transfer
    to You only such right or title as we have
</p>
<h4> 12. WARRANTY "AS IS" IN GENERAL - WITHOUT REGARD TO SEPARATE WARRANTY
    STATEMENTS PACKAGED BY THE MANUFACTURER WITH THE PRODUCTS.</h4>
<p>12.1 All Product specifications, illustrations, drawings, particulars,
    dimensions, performance data and other information on the Site or made
    available by Us are intended to represent no more than a general
    illustration of the Products and do not
    constitute a warranty or representation by us that the Products will
    conform with the same. You must refer to the manufacturer's
    specifications or warranty documentation to determine your rights and
    remedies in this regard.
    <br><br>12.2 You will have the benefit of the manufacturer's, licensor's
    or supplier's warranty with the Products supplied and should refer to
    the relevant documentation supplied with the Product in this regard.
    <br><br>12.3 Your rights of repair or replacement of any Products or any
    part or parts thereof which are found to be defective will (except where
    agreed otherwise) be negated or rendered void where:
    <br><br>12.3.1 Products have been repaired or altered by persons other
    than the manufacturer, us or any authorized dealer; and/or
    <br><br>12.3.2 Defective Product or Products have not been returned
    together with full details in writing of the alleged defects within 30
    days from the date on which such Products were delivered; and/or
    <br><br>12.3.3 Defects are due (wholly or partially) to mistreatment,
    improper use or storage or maintenance or installation, or failure to
    observe any manufacturers' instructions or other directions issued or
    made available by us in connection
    with the delivered Products.
    <br><br>12.4 EXCEPT AS EXPRESSLY STATED OTHERWISE IN THIS SECTION 12, WE
    MAKE NO EXPRESS WARRANTIES OR REPRESENTATIONS AND WE DISCLAIM ALL
    IMPLIED WARRANTIES AND REPRESENTATIONS, INCLUDING, WITHOUT LIMITATION,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. THESE CONDITIONS
    STATE YOUR SOLE AND EXCLUSIVE REMEDIES.
</p>
<h4>13. CONSENTS, CUSTOMS DUTIES &amp; EXPORT</h4>
<p>13.1 By clicking “ORDER NOW,” I am agreeing to receive text messages from
    VitaBison Gummies and business partners. I provide my signature
    expressly consenting to recurring contact from VitaBison Gummies or its
    business partners at the number I provided
    regarding products or services via live, automated or prerecorded
    telephone call, text message, or email. I understand that my telephone
    company may impose charges on me for these contacts, and I am not
    required to enter into this agreement as
    a condition of purchasing property, goods, or services. I understand
    that I can revoke this consent at any time. Terms &amp;
    conditions/privacy policy apply. For SMS campaigns: Text STOP to cancel
    and HELP for help. Msg &amp; data rates may apply.
    Recurring msgs up to 9 msgs per month.
    <br><br>13.2 If any license or consent of any government or other
    authority is required for the acquisition, carriage or use of the
    Products by You, You shall obtain such license or consent at your own
    expense and if necessary produce evidence
    to us on demand. Failure so to do shall not entitle you to withhold or
    delay payment of the price. Any additional expenses or charges incurred
    by us resulting from such failure shall be met by you.
    <br><br>13.3 Products licensed or sold to you under these Conditions may
    be subject to export control laws and regulations in the Territory or
    other relevant jurisdiction where You take delivery or use them. You
    shall be responsible for complying
    with those laws and will not do anything to breach them.
    <br><br>13.4 Items entering the European Economic Area (EEA) from
    outside over a certain value may be subject to customs charges (e.g.
    where costs are in excess of your personal import allowance). You may be
    subject to customs charges, import
    duties and taxes, levied when the Product reaches Your specified
    destination. Any such additional charges for customs clearance or import
    duties or taxes must be met by You, since We have no control over what
    these charges are. You should contact
    the local customs office in the relevant jurisdiction for further
    information on customs policies or duties.
</p>
<h4>14. NOTICES</h4>
<p>14.1 Any notice or other communications in relation to Our contract may
    be given by sending the same by hand delivery, pre-paid post, fax or
    e-mail to the latest address and contact that one party has notified in
    writing to the other. This will also
    be the address for service of legal proceedings in the manner prescribed
    by law. Except as set out above in relation to cancellation of consumer
    orders, such notices or communications (where properly addressed) shall
    be considered received:
    <br><br>14.1.1 In relation to hand delivery, on the date of delivery at
    the relevant address (or, if this is not a working date, the first
    working date thereafter);
    <br><br>14.1.2 If posted, 5 working days after the date of posting;
    <br><br>14.1.3 If sent by email, on the earliest of (i) the email being
    acknowledged by the recipient as received; (ii) receipt by the sender of
    an automated message indicating successful delivery or the email having
    been opened; or (iii) the
    expiry of 48 hours after transmission, provided that the sender has not
    received notification of unsuccessful transmission.
</p>
<h4>15. PERSONAL INFORMATION AND YOUR PRIVACY</h4>
<p>15.1 We will observe applicable data protection laws and will not use
    information that does or can be used to personally identify You
    ("Personal Data") other than as set out in Our Privacy Policy
    ("Privacy Policy"). By submitting Your Personal Data
    in relation to Your order, You consent to such Personal Data being
    processed to fulfill Your order and in accordance with such Privacy
    Statement.
</p>
<h4>16. GENERAL</h4>
<p>16.1 You shall not assign, transfer, charge or make over or purport to
    assign transfer charge to make over Your rights under these Conditions.
    Any purported assignment shall be null and void.
    <br><br>16.2 We shall not be liable to You nor held in breach of
    contract for any loss or damage which may be suffered as a direct or
    indirect result of Us being prevented, hindered or delayed in the
    performance by reason of any circumstances
    beyond Our reasonable control including (but not limited to) any act of
    God, war, terror, riot, civil commotion, government action, explosion,
    fire, flood, storm, accident, strike, lock-out, trade dispute or labor
    disturbance, breakdown of plant
    or machinery, interruption in the supply of power, Internet
    communications, or materials and in such event we may elect to cancel
    Your order and refund any payments made.
    <br><br>16.3 You acknowledge that these Conditions supersede and cancel
    all previous contracts, agreements and working arrangements whether oral
    or written, express or implied, between us. These Conditions prevail
    over any other terms or conditions
    contained in or referred to elsewhere or implied by trade, custom or
    course of dealing. Any purported terms or conditions to the contrary are
    hereby excluded to the fullest extent legally permitted. To the fullest
    extent permitted under applicable
    law, We reserve the right to modify these Conditions without prior
    written notice to You with effect for the future, subject to Your right
    to reject, by way of written notice, our modifications to these
    Conditions with respect to any orders for
    which Acceptance, but not yet fulfillment, has occurred.
    <br><br>16.4 No relaxation, forbearance, delay or indulgence by either
    You or Us in enforcing any of these Conditions or the granting of time
    by either party to the other shall prejudice or restrict such rights and
    powers.
    <br><br>16.5 No waiver of any term or condition of these Conditions
    shall be effective unless made in writing and signed by Us. The waiver
    of any breach of any Condition shall not be construed as a waiver of any
    subsequent breach or condition.
    <br><br>16.6 If for any reason We determine or a court of competent
    jurisdiction finds that any provision or portion of these Conditions to
    be illegal, unenforceable, or invalid under applicable law in a
    particular jurisdiction:
    <br><br>16.6.1 These Conditions will not be affected in other
    jurisdictions to the extent that such determination or finding has no
    application; and
    <br><br>16.6.2 In the relevant jurisdiction, the remainder of these
    Conditions (to the fullest extent permitted by law) will continue in
    full force and effect.
</p>
<h4>17. GOVERNING LAW&nbsp;</h4>
<p>17.1 The construction validity and performance of these Conditions shall
    be governed by US Law and You agree to submit to the exclusive
    jurisdiction of the US Courts, in the event of legal proceedings arising
    from any dispute; The language of any
    dispute resolution procedure or any proceedings will be English.
</p>
</div>
`;
const termsBtn = document.getElementById('terms');

termsBtn.addEventListener('click', () => {
  Swal.fire({
    title: `<p class="footer__modal-title">Terms and Conditions</p>`,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    showCloseButton: true,
    showConfirmButton: false,
    // width: '80%',
    html: termsHTML,
  });
});

const policyBtn = document.getElementById('policy');

policyBtn.addEventListener('click', () => {
  Swal.fire({
    title: `<p class="footer__modal-title">Privacy Policy</p>`,
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `,
    },
    showCloseButton: true,
    showConfirmButton: false,
    // width: '80%',
    html: policyHTML,
  });
});

const policyHTML = `
<div class="footer__modal">
<p>This policy governs the information collection, usage, and sharing
    practices of VitaBison Gummies, including its affiliates and related
    websites. It covers VitaBison Gummies's right to collect, use, store,
    and disclose information provided by you
    on its websites and other information collection and distribution
    practices. VitaBison Gummies is not responsible for the privacy
    practices or information collection of websites or applications that it
    does not own or control.</p>
<p>By visiting this Website and requesting information, products or services
    offered on or through this Website, you agree to the terms of this
    Privacy Policy, as they may be amended from time to time. As VitaBison
    Gummies updates or expands its Website,
    services or products, this Privacy Policy may change and the changes are
    effective upon posting. Please check back frequently for updates as it
    is your sole responsibility to be aware of changes. VitaBison Gummies
    does not provide notice of changes
    in any manner other than by posting the changes at this Website. This
    Privacy Policy is incorporated into, and part of, the Website Terms and
    Conditions which govern your use of this Website in general.</p>
<p>This Website is intended for users who are located in the United States
    of America. The Privacy Policy shall be interpreted under the laws of
    the United States of America.</p>
<p><b>Purpose of the Privacy Policy.</b></p>
<p>This Policy describes the information collection, use, and dissemination
    practices of VitaBison Gummies, its parent, subsidiaries and registered
    d/b/a companies (Collectively Referred herein after as
    "VitaBison Gummies") and all related websites owned
    or registered to VitaBison Gummies. It governs VitaBison Gummies's right
    to collect, use, store and disclose information provided by You on its
    (a) this Website, (b) VitaBison Gummies's other Websites, (c) on various
    Third Party websites, and
    (d) VitaBison Gummies's other information collection and distribution
    practices, including the acquisition of your information from and to
    Third Parties. VitaBison Gummies is not responsible for the information
    collection or privacy practices
    of third party websites or applications which company does not own or
    control.
</p>
<p>Information Collection, Use, and Dissemination practices.</p>
<p>No personal information will be shared with any third parties without the
    customer's permission.</p>
<p><b>1.0. Collection of Information.</b></p>
<p>1.1. Third Party Information. VitaBison Gummies may collect Personal
    Information from you when you provide information to a third party and
    VitaBison Gummies subsequently acquires or uses the information provided
    by the third party. Such information
    may include, but is not limited to, your name, email address, street
    address, zip code, telephone numbers (including cell phone numbers and
    carriers), birth date, gender, salary range, education and marital
    status, occupation, industry of employment,
    personal and online interests, and such other information you may have
    provided to the third party. When acquiring this information, VitaBison
    Gummies seeks assurances from the third party that you agreed to provide
    and have such information acquired
    by VitaBison Gummies. If you did not give express permission, or you
    would like to remove your permission, you may suppress all of your
    information by sending notification to us at <a href="mailto:support@vitabison.com">support@vitabison.com</a></p>
<p>1.2. Other Methods of Collecting Personal Information. Other occasions
    when VitaBison Gummies obtains information from you include: (1) when
    you claim a prize or seek to redeem an offer by VitaBison Gummies or by
    a third party; (2) when you request
    assistance through VitaBison Gummies's customer service department; and
    (3) when you voluntarily subscribe to a VitaBison Gummies service or
    newsletter.
</p>
<p>1.3. Cookies, Web Beacons, and Other Info Collected Using Technology.
    VitaBison Gummies currently uses cookie and web beacon technology to
    associate certain Internet-related information about you with
    information about you in its database. Additionally,
    VitaBison Gummies may use other new and evolving sources of information
    in the future.
</p>
<p>(a) Cookies. "Cookies" are a feature in your browser software. If
    enabled, we may write cookies that may store small amounts of data on
    your computer about your visit to any of the pages of this Site. Cookies
    assist us in tracking which of our features
    appeal the most to you and what content you may have viewed on past
    visits. When you visit this site again, cookies can enable us to
    customize our content according to your preferences. We may use cookies
    to: keep track of the number of return
    visits to this site; accumulate and report aggregate, statistical
    information on website usage; deliver specific content to you based on
    your interests or past viewing history; save your password for ease of
    access to our Site. You can disable
    cookies, although the Site may not function properly for you. Your
    browser preferences can be modified to accept or reject all cookies, or
    request a notification when a cookie is set. You may read more about
    cookies at http://cookiecentral.com.
    In order to use all of the features and functionality of VitaBison
    Gummies's websites, you need to accept cookies.
</p>
<p>(b) Web Beacons. A web beacon is a programming code that can be used to
    display an image on a web page, but can also be used to transfer your
    unique user identification to a database and associate you with
    previously acquired information about an
    individual in a database. This allows VitaBison Gummies to track certain
    websites you visit. Web beacons are used to track online behavioral
    habits for marketing purposes to determine products or services you may
    be interested in. In addition
    to using web beacons on web pages, VitaBison Gummies also uses web
    beacons in email messages sent to individuals listed in VitaBison
    Gummies's database.</p>
<p>(c) IP Addresses. VitaBison Gummies automatically tracks certain
    information based upon your behavior on the site. We may use this
    information to do internal research on our users' demographics,
    interests, and behavior to better understand, protect
    and serve you and our community. This information may include the URL
    that you just came from (whether this URL is on the site or not), which
    URL you next go to (whether this URL is on the site or not), your
    computer browser information, and your
    IP address. Your Internet Protocol ("IP") is a unique Internet "address"
    which is assigned to you by your Internet Service Provider ("ISP"). For
    local area network ("LAN"), DSL, or cable modem users, an IP address may
    be permanently assigned to
    a particular computer. IP addresses are automatically logged by Web
    servers, collecting information about a user's traffic patterns. While
    the IP address does not identify an individual by name, it may, with the
    cooperation of the ISP, be used
    to locate and identify an individual using the Web. Your IP address can,
    however, reveal what geographic area you are connecting from, or which
    ISP you are using. Finally, other websites you visit have IP addresses,
    and we may collect the IP addresses
    of those websites and their pages.</p>
<p>(d) Computer Profiles. VitaBison Gummies may also collect and accumulate
    other anonymous data which will help us understand and analyze the
    Internet experience of our visitors. For instance, VitaBison Gummies may
    accumulate visitor data relating to
    referring domain names, the type of browsers used, operating system
    software, screen resolutions, color capabilities, browser plug-ins,
    language settings, cookie preferences, search engine keywords and
    JavaScript enablement. When you provide us
    with Personal Identification Information, we are able to use such
    visitor data to identify you.</p>
<p>(e) Data Analysis. Data Analysis technology may be employed from time to
    time if used by a Client of VitaBison Gummies.
</p>
<p>(f) New Technology. The use of technology on the Internet, including
    cookies and web beacons, is rapidly developing. As a result, VitaBison
    Gummies strongly encourages individuals to revisit this policy for any
    updates regarding its use of new technology.</p>
<p>1.4. No Information Collected from Children. VitaBison Gummies will never
    knowingly collect any Personal Information about children under the age
    of 18. If VitaBison Gummies obtains actual knowledge that it has
    collected Personal Information about
    a child under the age of 18, that information will be immediately
    deleted from its database. Because it does not collect such information,
    VitaBison Gummies has no such information to use or to disclose to third
    parties.
</p>
<p>1.5. Credit Card Information and Bank Account Information. VitaBison
    Gummies may, in certain instances, collect credit card numbers, bank
    account information and related information when an individual places an
    order on VitaBison Gummies's Website.
    When the credit card or bank account information is submitted to VitaBison Gummies, such information is encrypted and is protected with SSL
    encryption software. VitaBison Gummies will use the credit card
    information or bank account information
    for purposes of processing and completing the transaction you requested
    on the Website, and the credit card information or bank account
    information will be disclosed to third parties as necessary to complete
    the requested purchase transaction.</p>
<p><b>2.0. Use of Personal Information.</b></p>
<p>2.1. General Use. The following paragraphs describe how VitaBison Gummies
    currently uses Personal Information, but VitaBison Gummies may change or
    broaden its use at any time. As noted below, VitaBison Gummies may
    update this policy from time to time.
    VitaBison Gummies may use Personal Information to provide promotional
    offers to individuals by means of email advertising, telephone
    marketing, direct mail marketing, mobile marketing, online banner
    advertising, and package stuffers, among other
    possible uses.</p>
<p>2.2. Email and Unsubscribe Policy. VitaBison Gummies uses Personal
    Information to provide third party promotional offers by email to
    individuals. VitaBison Gummies may maintain separate email lists for
    different purposes. If email recipients wish
    to end their email subscription from a particular list, they need to
    follow the instructions at the end of each email message to unsubscribe
    from the particular list. To unsubscribe from all VitaBison Gummies's
    email lists, a person must send
    an email to <a href="mailto:support@vitabison.com">support@vitabison.com</a>.</p>
<p>VitaBison Gummies's unsubscribe process impacts only the future delivery
    of electronic mailings disseminated by VitaBison Gummies on its own
    behalf. You may still receive electronic mailings sent on behalf of
    Third Parties and your Personal Information
    may still be shared with Third Parties for use in offline marketing and
    data appends, including email appends unless you unsubscribe as provided
    above.
</p>
<p>You should also note that unsubscribing from VitaBison Gummies's
    electronic mailings will not automatically unsubscribe your information
    from any Third Party business associates and licensees of the data.
    Since Third Party associates and licensee
    partners maintain separate databases from VitaBison Gummies, and you
    will need to unsubscribe from each source individually, if desired. This
    allows you the freedom to pick and choose which subscriptions to
    maintain and which to discontinue.</p>
<p>2.3. Email Message Content. You may receive commercial email messages
    promoting products that may interest you. If this happens, the "From:"
    field will display the name of the advertiser, and a method to
    unsubscribe from their emails will be provided
    at the bottom of the message.</p>
<p>2.4. Solicited Email. VitaBison Gummies only sends email to individuals
    who have agreed on the Website to receive email from VitaBison Gummies
    or to individuals who have agreed on a Third Party website to receive
    email from Third Parties. As such,
    VitaBisonGummies does not send unsolicited email messages. As a result,
    United States of America statutes requiring certain formatting for
    unsolicited email are not applicable to VitaBison Gummies's email
    messages.
</p>
<p>2.5. Targeted Advertising. VitaBison Gummies may use Personal Information
    to target advertising to an individual. When an individual is using the
    Internet, VitaBison Gummies uses Technology Information to associate an
    individual with that person's
    Personal Information, and VitaBison Gummies attempts to show advertising
    for products and services in which the person has expressed an interest
    in the Surveys, indicated an interest by means of Technology
    Information, and otherwise. VitaBison
    Gummies may, at its discretion, target advertising by using email,
    direct mail, telephones, cell phones, and other means of communication
    to provide promotional offers.
</p>
<p>2.6. Wireless Addresses. If the e-mail address you provide to VitaBison
    Gummies is a wireless e-mail address, you agree to receive messages at
    such address from VitaBison Gummies or its business associates (unless
    and until you have elected not to
    receive such messages by following the instructions in the unsubscribe
    portion of this policy). You understand that your wireless carrier's
    standard rates apply to these messages. You represent that you are the
    owner or authorized user of the
    wireless device on which messages will be received, and that you are
    authorized to approve the applicable charges.</p>
<p>2.7. Short Message Service. VitaBison Gummies may make available a
    service through which you can receive messages on your wireless device
    via short message service ("SMS Service"). Data obtained from you in
    connection with this SMS service may include
    your name, address, cell phone number, your provider's name, and the
    date, time, and content of your messages. You represent that you are 18
    years of age and the owner or authorized user of the wireless device on
    which messages will be received,
    and that you are authorized to approve the applicable charges. In
    addition to any fee of which you are notified your provider's standard
    messaging rates apply to our confirmation and all subsequent SMS
    correspondence. All charges are billed by
    and payable to your mobile service provider. VitaBison Gummies will not
    be liable for any delays in the receipt of any SMS messages, as delivery
    is subject to effective transmission from your network operator. SMS
    message services are provided
    on an AS IS basis. VitaBison Gummies may also obtain the date, time and
    content of your messages in the course of your use of the SMS Service.
    We will use the information we obtain in connection with our SMS Service
    in accordance with this Privacy
    Policy. If fees are charged to your wireless account invoice, we may
    provide your carrier with your applicable information in connection
    therewith. Your wireless carrier and other service providers may also
    collect data about your wireless device
    usage, and their practices are governed by their own policies.</p>
<p>You acknowledge and agree that the SMS Service is provided via wireless
    systems which use radios (and other means) to transmit communications
    over complex networks. We do not guarantee that your use of the SMS
    Service will be private or secure, and
    we are not liable to you for any lack of privacy or security you may
    experience. You are fully responsible for taking precautions and
    providing security measures best suited for your situation and intended
    use of the SMS Service. We may also access
    the content of your account and wireless account with your carrier for
    the purpose of identifying and resolving technical problems and
    service-related complaints.</p>
<p>You may remove your information from VitaBison Gummies's database. If you
    remove your information from VitaBison Gummies's database it will no
    longer be used by VitaBison Gummies for secondary purposes, disclosed to
    third parties, or used by VitaBison Gummies or third parties to send promotional correspondence to you.
    You may remove your information by sending your request in writing via
    email to <a href="mailto:support@vitabison.com">support@vitabison.com</a> or
    by sending "STOP",
    "END", "QUIT" to the SMS text message you have received.</p>
<p>2.8. Use of Technology Information. VitaBison Gummies may use Technology
    Information (1) to match a person's Personal Information and Third Party
    List Information to other categories of Personal Information to make and
    improve profiles of individuals,
    (2) to track a person's online browsing habits on the Internet, (3) to
    determine which areas of VitaBison Gummies's websites are most
    frequently visited. This information helps VitaBison Gummies to better
    understand the online habits of individuals
    so that VitaBison Gummies can target advertising and promotions to them.
</p>
<p>2.9. Profiles of Individuals. VitaBison Gummies may use Personal
    Information to make a profile of an individual. A profile can be created
    by combining Survey Information and Third Party List Information with
    other sources of Personal Information such
    as information obtained from public databases.</p>
<p>2.10. Storage of Personal Information. VitaBison Gummies stores the
    Personal Information in a database on its' computers. VitaBison Gummies
    computers have security measures (such as a firewall and password
    protections) in place to protect against
    the loss, misuse, and alteration of the information under VitaBison
    Gummies's control. Notwithstanding such measures, VitaBison Gummies
    cannot guarantee that its security measures will prevent its computers
    from being illegally accessed, and the
    Personal Information on them stolen or altered.</p>
<p><b>3.0. Other Use of Personal Information. VitaBison Gummies may use your
        Personal Information in the following
        ways:</b></p>
<p>3.1. Public Forums. When you contribute to a public area or feature of
    our Website, such as a chat room, bulletin board, list serve, blog, wiki
    or other open forum that we may make available on or through our
    Website, the information that you submit
    will be made available to the general public and will not be considered
    "Personal Information" for purposes of this Privacy Policy. For this
    reason, we recommend that you do not submit any sensitive information,
    including your full name, home
    address, phone number, other information that would enable other users
    to locate you or your financial information on these areas of our
    Website. Instead, make up a username that does not disclose your
    personal identity.</p>
<p>3.2. Service Providers. VitaBison Gummies may use third parties to help
    operate our Website and deliver products and services, and may share
    your Personal Information with our affiliates, service providers and
    other third parties that provide products
    or services for or through this Website or for our business (such as
    Website or database hosting companies, address list hosting companies,
    e-mail service providers, analytics companies, distribution companies,
    fulfillment companies, and other
    similar service providers that use such information on our behalf).
    Unless otherwise stated, these companies do not have any right to use
    the Personal Information we provide to them beyond what is necessary for
    them to assist us. When you conduct
    e-commerce with one of the e-commerce affiliates or service providers to
    which the Website may be linked, certain Personal Information such as
    your e-mail and home address may be collected by the service provider's
    server and made available to
    us.
</p>
<p>3.3. Aggregate Statistics. VitaBison Gummies may disclose aggregate
    statistics regarding user behavior as a measure of interest in, and use
    of, our Website and e-mails to third parties in the form of aggregate
    data, such as overall patterns or demographic
    reports that do not describe or identify any individual user.</p>
<p>3.4. Complying with Legal Process. VitaBison Gummies will use or disclose
    your Personal Information in response to subpoenas, court orders,
    warrants, or legal process, or to otherwise establish or exercise our
    legal rights or defend against legal
    claims or in the event you violate or breach an agreement with VitaBison
    Gummies. VitaBison Gummies will use and disclose your Personal
    Information if we believe you will harm the property or rights of VitaBison Gummies , its owners, or those
    of VitaBisonGummies 's other customers. Finally, we will use or disclose
    your Personal Information if we believe it is necessary to share
    information in order to investigate, prevent, or take action regarding
    illegal activities, suspected fraud,
    situations involving potential threats to the physical safety of any
    person, violations of VitaBison Gummies's acceptable use policy, or as
    otherwise required by law when responding to subpoenas, court orders and
    other legal processes.</p>
<p>3.5. Order Fulfillment. VitaBison Gummies will transfer your Personal
    Information to third parties when necessary to provide a product or
    service that you order from such third party while using VitaBison
    Gummies's websites or when responding to offers
    provided by VitaBison Gummies.</p>
<p>3.6. Data Summary. VitaBison Gummies may sell or transfer
    non-individualized information, such as summary or aggregated anonymous
    information about all persons or sub-groups of persons.</p>
<p><b>4.0. Privacy Practices of Third Parties.</b></p>
<p>4.1. Advertiser cookies and web beacons. Advertising agencies,
    advertising networks, and other companies who place advertisements on
    the websites and on the internet generally may use their own cookies,
    web beacons, and other technology to collect
    information about individuals. VitaBison Gummies does not control the
    use of such technology and VitaBison Gummies has no responsibility for
    the use of such technology to gather information about you.
</p>
<p>4.2. Links. The websites and email messages sometimes contain hypertext
    links to the websites of third parties. VitaBison Gummies is not
    responsible for the privacy practices or the content of such other
    websites. Linked websites may contain links
    to websites maintained by third parties. Such links are provided for
    your convenience and reference only. VitaBison Gummies does not operate
    or control in any respect any information, software, products or
    services available on such third party
    websites. The inclusion of a link to a website does not imply any
    endorsement of the services or the site, its contents, or its sponsoring
    organization.
</p>
<p>5.0. Foreign use of the Website. To the extent that you are accessing the
    Website while domiciled outside of the United States of America, you
    acknowledge that the Personal Information you are providing VitaBison
    Gummies is collected and stored in
    the United States of America and therefore consent to the transfer of
    information to and storage of the information outside of your domiciled
    country and in the United States of America.</p>
<br>
</div>`;
