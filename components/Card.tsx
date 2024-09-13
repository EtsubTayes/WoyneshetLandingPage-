import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarFold } from "lucide-react";
import { Calendar } from "@/components/ui/calendar"

export function AppointmentCard() {
  return (
    <Card className="w-[350px] shadow-md border border-gray-200 rounded-lg font-family:['Poppins']">
      <CardHeader className="text-left p-6">
        <CardTitle className="text-2xl font-bold text-gray-800">Schedule an Appointment</CardTitle>
        <CardDescription className="text-sm text-gray-500">Fill in the details to book a consultation.</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form>
          <div className="grid w-full items-center gap-4">
            {/* Name Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input id="name" placeholder="Enter your name" className="border-gray-300" />
            </div>

            {/* Email Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="border-gray-300" />
            </div>

            {/* Preferred Date */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="date" className="text-gray-700">Preferred Appointment Date</Label>
              <Input id="date" type="date" className="border-gray-300" />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <Input id="message" placeholder="Leave a message (optional)" className="border-gray-300" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between gap-4 p-6">
  <Button variant="outline" className="text-gray-600 border-gray-300 hover:bg-gray-100">
    Cancel
  </Button>
  <Button  variant={"default"} className="flex justify-between gap-4">
    <CalendarFold className="w-5 h-5" />
    <span>Schedule</span>
  </Button>
</CardFooter>

    </Card>
  );
}
