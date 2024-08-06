import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from './DevelopmentStories.module.css';

// Sample data import from a spreadsheet (assuming it's converted to a JSON format)
import storiesData from './storiesData.json';

// Custom modal styles
const customModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '5px',
    marginLeft: '10%',
    marginRight: '10%',
  },
};

const DevelopmentStories = () => {
  const [completedStories, setCompletedStories] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentHints, setCurrentHints] = useState('');
  const [expandedStories, setExpandedStories] = useState({}); // State to manage expanded rows
  const [filter, setFilter] = useState('all'); // State for filter

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem('completedStories')) || {};
    setCompletedStories(savedState);
  }, []);

  const handleCheckboxChange = (index) => {
    const filteredStories = getFilteredStories();
    const actualIndex = storiesData.indexOf(filteredStories[index]);
    const newCompletedStories = { ...completedStories, [actualIndex]: !completedStories[actualIndex] };
    setCompletedStories(newCompletedStories);
    localStorage.setItem('completedStories', JSON.stringify(newCompletedStories));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure about that?')) {
      setCompletedStories({});
      localStorage.removeItem('completedStories');
    }
  };

  const openModal = (hints) => {
    setCurrentHints(hints);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentHints('');
  };

  const toggleExpand = (index) => {
    setExpandedStories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredStories = () => {
    return storiesData.filter((story) => {
      if (filter === 'uiBuilder') return story.product === 'UI Builder';
      if (filter === 'nonUiBuilder') return story.product !== 'UI Builder';
      return true;
    });
  };

  const filteredStories = getFilteredStories();

  return (
    <div className={styles.storiesContainer}>
      <h1 className={styles.storiesTitle}>Stories</h1>
      <p className={styles.storyHints}>
        Stories with a 🔩 (nuts and bolt) icon are UI Builder stories, most are going to be covered as part of the <b>You & I Builder Live</b> livestreams. </p><p>
        Some stories might have an ℹ️ icon next to their title. This opens the Hints modal, where we might provide some resources you can use to achieve your goals. It won't necessarily be something demonstrating the specific story you're working on, but it should demonstrate concepts related to the story that should help you get started.
      </p>
      <button
        className={styles.clearAllButton}
        onClick={handleClearAll}
      >
        Clear All
      </button>
      <div className={styles.filterContainer}>
        <label htmlFor="filter">Filter Stories:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="uiBuilder">UI Builder Stories</option>
          <option value="nonUiBuilder">Non-UI Builder Stories</option>
        </select>
      </div>
      <div className={styles.storiesList}>
        <div className={styles.storiesHeader}>
          <div className={styles.headerCheckbox}></div>
          <div className={styles.headerTitle}>Title</div>
          <div className={styles.headerAsA}>As a</div>
          <div className={styles.headerIWantTo}>I want to</div>
          <div className={styles.headerSoThat}>So that</div>
          <div className={styles.headerAcceptanceCriteria}>Acceptance Criteria</div>
        </div>
        {filteredStories.map((story, index) => (
          <div key={index} className={`${styles.storyItem} ${index % 2 === 0 ? styles.storyItemAlt : ''} ${completedStories[storiesData.indexOf(story)] ? styles.storyCompleted : ''}`}>
            <div className={styles.storyCheckbox}>
              <input
                type="checkbox"
                checked={!!completedStories[storiesData.indexOf(story)]}
                onChange={() => handleCheckboxChange(index)}
              />
              {story.product === 'UI Builder' && (
                <span className={styles.uiBuilderIcon} title="UI Builder Story">🔩</span>
              )}
            </div>
            <div className={styles.storyTitle}>
              {story.title}
              {story.hints && (
                <span
                  className={styles.hintsIcon}
                  onClick={() => openModal(story.hints)}
                  title="Hints"
                >
                  ℹ️
                </span>
              )}
            </div>
            <div className={styles.storyAsA}>{story.asA}</div>
            <div className={styles.storyIWantTo}>{story.iWantTo}</div>
            <div className={styles.storySoThat}>{story.soThat}</div>
            <div className={styles.storyAcceptanceCriteria}>
              <div className={styles.acceptanceCriteriaText}>
                {expandedStories[index] ? (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: story.acceptanceCriteria }}></div>
                    <span className={styles.expandIcon} onClick={() => toggleExpand(index)}>▲</span>
                  </div>
                ) : (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: story.acceptanceCriteria.substring(0, 200) + (story.acceptanceCriteria.length > 200 ? '...' : '') }}></div>
                    {story.acceptanceCriteria.length > 200 && (
                      <span className={styles.expandIcon} onClick={() => toggleExpand(index)}>▼</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customModalStyles}
        contentLabel="Hints Modal"
      >
        <div className={styles.modalContent}>
          <h2>Hints</h2>
          <p>
            <div dangerouslySetInnerHTML={{ __html: currentHints }} />
          </p>
          <button className={styles.modalCloseButton} onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default DevelopmentStories;
