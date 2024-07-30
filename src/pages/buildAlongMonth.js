import React, { useState } from 'react';
import Layout from '@theme/Layout';
import DevelopmentStories from '../components/DevelopmentStories'; // Adjust the path as necessary
import styles from './buildAlongMonth.module.css'; // Make sure to create a corresponding CSS module file
import clsx from 'clsx';

function BAMHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="headerContent">
                    <div className="headerText">
                        <h1 className="hero__title customHeader">Welcome to Build Along Month</h1>
                        <p className="hero__subtitle customSubtitle">You & I Builder Live</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

const listStyles = {
    listStyleType: 'disc',
    paddingLeft: '20px',
};

const listItemStyles = {
    marginBottom: '10px',
};

function CollapsibleSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.collapsibleSection}>
            <h2 onClick={() => setIsOpen(!isOpen)} className={styles.collapsibleHeader}>
                <span>{title}</span> <span>{isOpen ? '▲' : '▼'}</span>
            </h2>
            {isOpen && <div className={styles.collapsibleContent}>{children}</div>}
        </div>
    );
}

function BuildAlongMonth() {
    return (
        <Layout title="Build Along Month">
            <BAMHeader />

            <div className={clsx('container', styles.pageContainer, 'mx-auto', 'px-4', 'py-4', 'md:px-6', 'md:py-6', 'lg:px-8', 'lg:py-8')}>
                <div className={styles.welcomeBanner}>
                    <h1>Introduction</h1>

                    <p>For the month of August, You & I Builder Live will focus on Build Along Month! Brad and Maria Gabriela will be building an application from scratch in UI Builder, and you can build along with them.</p>

                    <p>Our goal is to build an application that will allow an end user to go to conferences or other networking events and grab information quickly from people they meet so they can follow up later. It's meant to be quick to use - Users can whip out their phone, open the form, put in the information needed, and then keep moving on to the next session.</p>

                    <p>You can approach this project in one of two ways:</p>
                    <ul style={listStyles}>
                        <li style={listItemStyles}>Attempt the stories in the order they are outlined below on your own, and if you get stuck you can watch the livestreams provided.</li>
                        <li style={listItemStyles}>Watch the videos first to get a sense of what we are doing, then go and build your own application using the stories below.</li>
                    </ul>

                    <p>Whichever way you decide to go about it, you are free to complete this project as you wish: either stick to the letter of the requirement or go above and beyond what you're being asked to do. Be as creative as you want to be, or just build a baseline application. The point is to become more familiar with UI Builder, learn more about the concepts outlined in the stories, learn more about working with stories as you might in your job as a Developer or Administrator, and have a good topic of conversation for future interviews. This is going to be what you make of it, it's all up to you.</p>

                    <p>In the You & I Builder Livestreams, we will be focusing on the main user interface of the application, so the videos will only cover that. As a bonus, we will be including extra stories to really flesh out your application and hit on more parts of the platform.</p>
                </div>

                <CollapsibleSection title="Questions?">
                    <div className={styles.questionsSection}>
                        <p>The best place to ask questions about this project is going to be in the SNDevs slack server. You can grab an invite by going to <a href="https://SNDevs.com" target="_blank"><u>SNDevs.com</u></a>, then find the channel <code>#next-experience-uib-workspace</code> for asking questions about UI Builder/Workspace related issues, and you can ask in <code>#you-and-i-build-along-month</code> about any of the extra, non-UI Builder, stories linked below. Be sure to link to this guide when you ask questions and use good <a href="https://xyproblem.info/" target="_blank"><u>question asking best practice</u></a>.</p>
                        <p>Important things to include in your posts:</p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>What do you expect to happen and what is happening from your observations?</li>
                            <li style={listItemStyles}>What are you trying to solve?</li>
                            <li style={listItemStyles}>What is the trouble you are encountering?</li>
                            <li style={listItemStyles}>What have you tried so far?</li>
                        </ul>
                        <p>The stories provided below aren't going to give you all the information you need, nor will they walk you through each task step by step like a lab guide typically does. It's up to you to google and do research to achieve the desired results, just like if you were receiving tasks to do at your job. Some of the stories will provide a help link or some extra guidance, but for the most part it's time to practice your Google-Fu!</p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="What do I need to know?">
                    <div className={styles.needToKnowSection}>
                        <p>You most likely won't be able to use the stories below right away if you are brand new to the platform. We are making a few assumptions as we write this, and we expect you are familiar with:</p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}><b>ServiceNow Administration</b> - You either have your Certified System Administrator Certification or have 3-6 months of working in a ServiceNow Administrator capacity. The tasks below will expect you to be familiar with the platform as a whole, but especially UI Builder. You can attempt the tasks in whichever way you are most comfortable, if you prefer App Engine Studio then go for it, but if you don't want to use AES you don't have to.</li>
                            <li style={listItemStyles}><b>UI Builder</b> - We have a section below that goes into what UI Builder is and has resources to introduce you to UI Builder. If you have zero experience with UI Builder, we suggest you work through the suggestions first, as they will do a better job of introducing you to UI Builder than this project will.</li>
                            <li style={listItemStyles}><b>Technical knowledge</b> - You have some form of background or have researched how to work with Agile stories, and you are able to identify what you don't know and are able to google your way to success.</li>
                        </ul>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="What is a story?">
                    <div className={styles.storySection}>
                        <p>A "story" refers to a specific piece of work that needs to be completed to contribute to the overall functionality of an application being built within the ServiceNow platform. Stories are used within an agile development framework, which is a method of software development that emphasizes incremental, iterative work sequences commonly known as sprints.</p>
                        <p>Think of a story as a clear and concise description of a feature or task from the perspective of the end user. It outlines who will use the feature (the persona), what they want to do, and why they want to do it (the goal or benefit). This is often structured in a simple template: "As a [persona], I want to [do something] so that [I can achieve some result]."</p>
                        <p>Each story also includes acceptance criteria, which are the specific requirements that must be met for the story to be considered complete. These criteria are essential as they guide developers to know when they have achieved the goals of the story.</p>
                        <p>In ServiceNow, stories are used to track the development of new applications, enhancements to existing applications, or other updates that need to be made to the ServiceNow instance. Working on stories allows developers to focus on small, manageable sections of work that contribute to larger projects, ensuring that each piece of the project is done to a certain standard and is delivering value to the users.</p>
                        <p>In the stories below, you will find information relaying what is expected for the story to be considered "Complete". It will only provide the bare minimum guidance you will need to fulfill these tasks; it is up to you to figure out how to execute upon them. Feel free to be as creative as you'd like. In a real-world job environment, you'd be expected to adhere to the stories very strictly, but for the purposes of this exercise you can do whatever you want with your application. You can approach the goal with whatever technology, philosophy, or product you might want to use, just make sure you have a working app at the end.</p>
                        <p>In the hints column, we might provide some resources you can use to achieve your goals. It won't necessarily be something demonstrating the specific story you're working on, but it should demonstrate concepts related to the story that should help you get started.</p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="What is UI Builder?">
                    <div className={styles.uiBuilderSection}>
                        <p>UI Builder is a ServiceNow product used to create user experiences. It can be used to create Workspaces and Experiences, but we still recommend you use Angular Service Portals to create end-user public portals. For more information on when to use each technology, please visit <a href="https://www.servicenow.com/community/next-experience-articles/ui-builder-and-service-portal/ta-p/2370515" target="_blank"><u>this Community Article</u></a>.</p>
                        <p>If you want more UI Builder resources to learn from and reference, we recommend you check out:</p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}><a href="https://nowlearning.servicenow.com/lxp/en/now-platform/ui-builder-fundamentals-washington?id=learning_course_prev&course_id=a462a97fc35439185922751ce00131bd" target="_blank"><u>NowLearning - UI Builder Fundamentals (Washington)</u></a></li>
                            <li style={listItemStyles}><a href="https://servicenownextexperience.github.io/labs/LAB2050-K24-Intro-to-Workspaces/overview" target="_blank"><u>Crafting Workspaces Like a Pro: A Hands-On Learning Adventure! Lab</u></a></li>
                        </ul>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Share your Success!">
                    <div className={styles.uiBuilderSection}>
                        <p>Keep us posted on your progress on Linkedin! We'd love to see what you make of this, so be sure to use these hashtags on your LinkedIn posts:</p>
                        <p><code>#ServiceNow #ServiceNowDev #YIBL #BuildAlongMonth #UIBuilder</code></p>
                        <p>If you have any feedback about the stories below, or want to contribute helpful links for any of them, drop by the slack channel linked above and let us know.</p>
                    </div>
                </CollapsibleSection>

                <CollapsibleSection title="Update set">
                    <div className={styles.uiBuilderSection}>
                        <p>Here is the update set you're going to need to load into your instance to get the application files you can start with:</p>
                        <ul style={listStyles}>
                            <li style={listItemStyles}>Download Update Set - <a href="src/pages/downloads/YIBL_BAM_Conference-Notes_v1.0.01.xml" download="YIBL_BAM_Conference-Notes_v1.0.01.xml"><u>📝 BAM Conference Notes v1.0.01 (Last updated 7.28.2024)</u></a></li>
                        </ul>
                    </div>
                </CollapsibleSection>

                <DevelopmentStories />
            </div>
        </Layout>
    );
}

export default BuildAlongMonth;