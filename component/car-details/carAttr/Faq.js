import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "../detailsStyles.module.css";

const Faq = () => {
  return (
    <section className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>FAQs</h2>
      <Accordion defaultActiveKey="0" bsPrefix="accordion faqAccordion">
        <Accordion.Item eventKey="0" bsPrefix="accordion-item faqItem">
          <Accordion.Header bsPrefix="accordion-header faqHeader">
            How to buy a car?
          </Accordion.Header>
          <Accordion.Body bsPrefix="accordion-body textLeft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" bsPrefix="accordion-item faqItem">
          <Accordion.Header bsPrefix="accordion-header faqHeader">
            How do I pay for the car?
          </Accordion.Header>
          <Accordion.Body bsPrefix="accordion-body textLeft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" bsPrefix="accordion-item faqItem">
          <Accordion.Header bsPrefix="accordion-header faqHeader">
            Is your site approved by the Ministry of Commerce?
          </Accordion.Header>
          <Accordion.Body bsPrefix="accordion-body textLeft">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className="d-flex justify-content-center mt-5">
        <button className={styles.moreBtnFaq}>More</button>
      </div>
    </section>
  );
};

export default Faq;
