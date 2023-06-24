import React from "react";
import "./style.css";
const Mainframe = ({ bookingdata }) => {
  return (
    <>
      <main className="flex-1 relative overflow-y-auto focus:outline-none">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome!</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-4 ">
                <div className="blockcodes">
                  <p>Shows Booking</p>
                  <h1>{bookingdata.bookedData.ticketSummary.showBooking.totalActiveBooking}</h1>
                  <span>{bookingdata.bookedData.ticketSummary.showBooking.totalBooking}</span>
                </div>
                <div className="blockcodes">
                  <p>Events Booking</p>
                  <h1>{bookingdata.bookedData.ticketSummary.eventsBooking.totalActiveEventBookings}</h1>
                  <span>{bookingdata.bookedData.ticketSummary.eventsBooking.totalEventBookings}</span>
                </div>
                <div className="blockcodes">
                  <p>Shows Ended</p>
                  <h1>{bookingdata.bookedData.ticketSummary.showsEnded.totalActiveShowsEnded}</h1>
                  <span>{bookingdata.bookedData.ticketSummary.showsEnded.totalShowsEnded}</span>
                </div>
                <div className="blockcodes">
                  <p>Upcoming Shows</p>
                  <h1>{bookingdata.bookedData.ticketSummary.upcomingShows.totalUpcomingShows}</h1>
                  <span>{bookingdata.bookedData.ticketSummary.upcomingShows.totalActiveUpcomingShows}</span>
                </div>
              </div>
              <div className="grid grid-rows-2 sm:grid-flow-col gap-4 mt-8">
                <div className="col-span-2 bg-white ">
                  <div className="blockcodes">
                    <p>Recently Booked Tickets</p>
                    {bookingdata.bookedData.tickets.map((bk, i) => {
                      return (
                        <>
                          <p key={bk.bookingId}>
                            <b>{bk.noOfTickets}</b> Tickets for <b>{bk.movieName}</b> booked by <b>{bk.bookedByUser}</b>
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="row-span-3 col-span-2 ">
                  <div className="blockcodes bg-white">
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Mainframe;
