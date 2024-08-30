import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Calendar } from "@/Components/ui/calendar";
import {
  Bell,
  Calendar as CalendarIcon,
  CheckCircle,
  Plus,
} from "lucide-react";

export default function DashboardComponent() {
  return (
    <div className="p-8 bg-background font-[Quicksand]">
      <h1 className="text-3xl font-bold mb-6">Reminder Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className=" bg-blue-400">
          <CardHeader>
            <CardTitle>Upcoming Reminders</CardTitle>
            <CardDescription>You have 3 reminders for today</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-white">
              <li className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-primary" />
                <span>Team meeting at 2 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-primary" />
                <span>Call mom at 5 PM</span>
              </li>
              <li className="flex items-center space-x-3">
                <Bell className="h-5 w-5 text-primary" />
                <span>Submit project report by 8 PM</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className=" bg-cyan-300">
          <CardHeader className="bg-">
            <CardTitle>Calendar</CardTitle>
            <CardDescription>View and manage your schedule</CardDescription>
          </CardHeader>
          <CardContent className=" flex justify-center items-center">
            <Calendar className="rounded-3xl border-2 bg-pink-200 border-black " />
          </CardContent>
        </Card>
        <Card className=" bg-slate-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your reminders</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-green-300" variant="outline">
              <Plus className="mr-2 h-4 w-4" /> Add New Reminder
            </Button>
            <Button variant="outline" className="w-full bg-green-300">
              <CheckCircle className="mr-2 h-4 w-4" /> Mark All as Complete
            </Button>
            <Button variant="outline" className="w-full bg-green-300">
              <CalendarIcon className="mr-2 h-4 w-4" /> View All Reminders
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
