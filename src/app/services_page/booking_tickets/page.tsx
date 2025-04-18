import { Metadata } from 'next'
import BookingTicketsPage from './Booking_page'

export const metadata: Metadata = {
  title: 'Бронирование авиабилетов и отелей',
  description: 'Подберем и забронируем авиабилеты и отели по выгодным ценам. Индивидуальный подход и надежные партнеры.',
}

export default function Page() {
  return <BookingTicketsPage />
}
