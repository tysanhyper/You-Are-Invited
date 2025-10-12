import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Rsvp {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  guests: number;
  attendance: string;
  events: string[];
  message: string;
}

const RsvpAdmin: React.FC = () => {
  const { data: rsvps, isLoading, error } = useQuery<Rsvp[]>({
    queryKey: ["rsvps"],
    queryFn: async () => {
      const response = await fetch("/.netlify/functions/api");
      if (!response.ok) {
        throw new Error("Failed to fetch RSVPs");
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading RSVPs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading RSVPs: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">RSVP Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {rsvps && rsvps.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Events</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rsvps.map((rsvp) => (
                    <TableRow key={rsvp.id}>
                      <TableCell className="font-mono text-sm">{rsvp.id}</TableCell>
                      <TableCell>{`${rsvp.firstName} ${rsvp.lastName}`}</TableCell>
                      <TableCell>{rsvp.email}</TableCell>
                      <TableCell>{rsvp.guests}</TableCell>
                      <TableCell>
                        <Badge variant={rsvp.attendance === "accept" ? "default" : "secondary"}>
                          {rsvp.attendance}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {rsvp.events.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {rsvp.events.map((event) => (
                              <Badge key={event} variant="outline">
                                {event}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-500">None</span>
                        )}
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{rsvp.message || "No message"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <p className="text-center text-gray-500">No RSVP submissions yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RsvpAdmin;
