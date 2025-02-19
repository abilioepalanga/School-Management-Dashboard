// Obtendo a data corrente no formato 'YYYY-MM-DD'
const currentDate = new Date().toISOString().split("T")[0];

// Função para adicionar ou subtrair dias de uma data
function adjustDate(date: Date, days: number) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

export const calendarEvents = [
    {
        title: "Math",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T08:00:00"), 0), // Dia atual
        end: adjustDate(new Date(currentDate + "T08:45:00"), 0), // Dia atual
    },
    {
        title: "English",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T09:00:00"), 1), // Dia seguinte
        end: adjustDate(new Date(currentDate + "T09:45:00"), 1), // Dia seguinte
    },
    {
        title: "Biology",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T10:00:00"), 2), // Dois dias depois
        end: adjustDate(new Date(currentDate + "T10:45:00"), 2), // Dois dias depois
    },
    {
        title: "Physics",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T11:00:00"), -1), // Um dia antes
        end: adjustDate(new Date(currentDate + "T11:45:00"), -1), // Um dia antes
    },
    {
        title: "Chemistry",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T12:00:00"), 0), // Dia atual
        end: adjustDate(new Date(currentDate + "T12:45:00"), 0), // Dia atual
    },
    {
        title: "History",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T13:00:00"), 1), // Dia seguinte
        end: adjustDate(new Date(currentDate + "T13:45:00"), 1), // Dia seguinte
    },
    {
        title: "Math",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T14:00:00"), 0), // Dia atual
        end: adjustDate(new Date(currentDate + "T14:45:00"), 0), // Dia atual
    },
    {
        title: "English",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T15:00:00"), 2), // Dois dias depois
        end: adjustDate(new Date(currentDate + "T15:45:00"), 2), // Dois dias depois
    },
    {
        title: "Biology",
        allDay: false,
        start: adjustDate(new Date(currentDate + "T16:00:00"), -1), // Um dia antes
        end: adjustDate(new Date(currentDate + "T16:45:00"), -1), // Um dia antes
    },
];
