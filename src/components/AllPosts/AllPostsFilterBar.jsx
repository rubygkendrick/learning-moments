
export const AllPostsFilterBar = ({ setSearchTerm, setSelectedTopic, allTopics }) => {
    return (
        <div className="AllPosts-container-filterBar">
            <div className="AllPosts-container-post-topics">
                <select defaultValue="0"
                    onChange={(event) => { setSelectedTopic(event.target.value) }}>
                    <option value="0" >Topic</option>
                    {allTopics.map(topicObject => (
                        <option key={topicObject.id} value={topicObject.name} >
                            {topicObject.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="AllPosts-container-post-showAll">
                <button onClick={(event) => { setSelectedTopic(event.target.value) }}
                    defaultValue="0" className="showAllBtn">Show All</button>
            </div>
            <div className="AllPosts-container-post-search">
                <input onChange={(event) => { setSearchTerm(event.target.value) }}
                    type="text" placeholder="Search..." />
            </div>

        </div>
    )

}