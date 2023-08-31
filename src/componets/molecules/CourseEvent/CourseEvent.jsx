import './_course-event.scss'
import './course-event-2.scss'

const CourseEvent = ({ event }) => {
    return <div className={'course-event-container'}>
        <div>
            <p>{event.startTime}</p>
            <p>{event.endTime}</p>
        </div>
        <div>
            <p>{event.title}</p>
            <p>{event.subTitle}</p></div>
    </div>
}

export default CourseEvent