import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import "./style.css"

const Faq = () => {
  return (
    <Accordion className='container mt-4' >
        <h2 className='text-start  my-4 mt-4' id='faq-head'>Frequently Asked Questions </h2>
    <AccordionItem id='accordians' className='mt-2 my-2 '>
        <AccordionItemHeading>
            <AccordionItemButton id='faq-button' className='text-light'>
                What harsh truths do you prefer to ignore?
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p className='text-light mt-2'>
                Exercitation in fugiat est ut ad ea cupidatat ut in
                cupidatat occaecat ut occaecat consequat est minim minim
                esse tempor laborum consequat esse adipisicing eu
                reprehenderit enim.
            </p>
        </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem id='accordians' className=' mt-2 my-4'>
        <AccordionItemHeading>
            <AccordionItemButton id='faq-button ' className='text-light'>
            Are OTT websites free to use?
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p className='text-light'>
            OTT websites typically require a subscription or payment to access their content. While some platforms offer limited free content or trial periods, most require a monthly or annual subscription fee to unlock their full library of content.
            </p>
        </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem id='accordians' className='mt-3 my-4'>
        <AccordionItemHeading>
            <AccordionItemButton id='faq-button' className='text-light'>
            Can I watch live TV on OTT websites?
            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p className='text-light'>
            Yes, many OTT websites offer live TV streaming as part of their service. Some platforms, like Sling TV, YouTube TV, and Hulu + Live TV, provide a selection of live channels that you can stream in real-time over the internet.
            </p>
        </AccordionItemPanel>
    </AccordionItem>
    <AccordionItem id='accordians' className='mt-2 my-4 box'>
        <AccordionItemHeading>
            <AccordionItemButton id='faq-button' className='text-light'>
            Can I share my OTT website subscription with others?

            </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
            <p>
            The ability to share an OTT website subscription varies depending on the platform. Some services, like Netflix, allow users to create multiple profiles within a single account and share it with family members or friends. However, sharing account credentials with people outside your household may violate the terms of service of some platforms.
            </p>
        </AccordionItemPanel>
    </AccordionItem>
</Accordion>
  )
}

export default Faq
