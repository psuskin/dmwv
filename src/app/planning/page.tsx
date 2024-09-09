/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import {
  Calendar,
  momentLocalizer,
  Event as CalendarEvent,
  View,
} from "react-big-calendar";
import moment from "moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styles from "./calendar.module.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const localizer = momentLocalizer(moment);

interface CongressEvent extends CalendarEvent {
  id: number;
  title: string;
  start: Date;
  end: Date;
  desc: string;
  type: string;
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const events: CongressEvent[] = [
  {
    id: 1,
    title: "Annual Medical Wellness Congress",
    start: new Date(currentYear, currentMonth, 15),
    end: new Date(currentYear, currentMonth, 17),
    desc: "Join us for the largest medical wellness event of the year.",
    type: "congress",
  },
  {
    id: 2,
    title: "Wellness Workshop",
    start: new Date(currentYear, currentMonth, 5),
    end: new Date(currentYear, currentMonth, 5),
    desc: "A hands-on workshop focusing on the latest wellness techniques.",
    type: "workshop",
  },
  {
    id: 3,
    title: "Medical Tech Symposium",
    start: new Date(currentYear, currentMonth, 20),
    end: new Date(currentYear, currentMonth, 22),
    desc: "Exploring cutting-edge technologies in medical wellness.",
    type: "symposium",
  },
  {
    id: 4,
    title: "Today's Wellness Seminar",
    start: new Date(),
    end: new Date(),
    desc: "A seminar on current wellness trends and practices.",
    type: "seminar",
  },
  {
    id: 5,
    title: "Yesterday's Health Conference",
    start: new Date(new Date().setDate(new Date().getDate() - 1)),
    end: new Date(new Date().setDate(new Date().getDate() - 1)),
    desc: "Recap of the latest health discoveries and innovations.",
    type: "conference",
  },
];

const EventDialog: React.FC<{ event: CongressEvent }> = ({ event }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">View Details</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{event.title}</DialogTitle>
        <DialogDescription>
          <p className="text-sm text-gray-500">
            {moment(event.start).format("MMMM D, YYYY")} -{" "}
            {moment(event.end).format("MMMM D, YYYY")}
          </p>
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4">
        <Badge className="mb-2 bg-primary-600">{event.type}</Badge>
        <p className="text-sm">{event.desc}</p>
      </div>
    </DialogContent>
  </Dialog>
);

const CongressPlanningCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CongressEvent | null>(
    null
  );
  const [view, setView] = useState<View>("month");
  const [date, setDate] = useState(new Date());

  const handleSelectEvent = (event: CongressEvent) => {
    setSelectedEvent(event);
  };

  const handleViewChange = (newView: View) => {
    setView(newView);
  };

  const handleNavigate = (newDate: Date) => {
    setDate(newDate);
  };

  const CustomToolbar = (toolbar: any) => {
    const goToToday = () => {
      toolbar.onNavigate("TODAY");
    };

    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    return (
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <Button
            onClick={goToBack}
            variant="outline"
            size="sm"
            className={styles.toolbarButton}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={goToToday}
            variant="outline"
            size="sm"
            className={styles.toolbarButton}
          >
            <CalendarIcon className="h-4 w-4 mr-2" />
            <span className={styles.toolbarButtonText}>Today</span>
          </Button>
          <Button
            onClick={goToNext}
            variant="outline"
            size="sm"
            className={styles.toolbarButton}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <span className={styles.toolbarLabel}>{toolbar.label}</span>
        <div className={styles.toolbarRight}>
          {["month", "week", "day", "agenda"].map((viewName) => (
            <Button
              key={viewName}
              onClick={() => toolbar.onView(viewName)}
              variant={view === viewName ? "default" : "outline"}
              size="sm"
              className={styles.toolbarButton}
            >
              {viewName.charAt(0).toUpperCase() + viewName.slice(1)}
            </Button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Congress Planning Calendar</h1>
      <div className={styles.gridContainer}>
        <Card className={styles.calendarCard}>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Plan your attendance for our upcoming congresses and workshops.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectEvent={handleSelectEvent}
              view={view}
              onView={handleViewChange}
              date={date}
              onNavigate={handleNavigate}
              components={{
                toolbar: CustomToolbar,
              }}
              className={styles.calendar}
            />
          </CardContent>
        </Card>
        <Card className={styles.detailsCard}>
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedEvent ? (
              <>
                <h2 className={styles.eventTitle}>{selectedEvent.title}</h2>
                <p className={styles.eventDate}>
                  {moment(selectedEvent.start).format("MMMM D, YYYY")} -{" "}
                  {moment(selectedEvent.end).format("MMMM D, YYYY")}
                </p>
                <Badge className={styles.eventBadge}>
                  {selectedEvent.type}
                </Badge>
                <p className={styles.eventDescription}>{selectedEvent.desc}</p>
                <EventDialog event={selectedEvent} />
              </>
            ) : (
              <p className={styles.noEventSelected}>
                Select an event to view details
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CongressPlanningCalendar;
