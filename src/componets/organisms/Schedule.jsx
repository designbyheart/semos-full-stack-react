import CourseEvent from '@/componets/molecules/CourseEvent/CourseEvent'

const Schedule = ({ title, date = 'Monday, 12 Sept.', eventItems = [] }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{date}</p>
            {eventItems &&
                eventItems.map((eventItem) => <CourseEvent key={eventItem} event={eventItem} />)}
        </div>
    )
}

export default Schedule
