import { useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { countries } from "@/lib/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const UniversityDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { searchTerm } = location.state || { searchTerm: '' };

  const university = countries.flatMap(c => c.universities).find(u => u.id === id);

  if (!university) {
    return <div>University not found</div>;
  }

  // Filter courses based on the search term from the previous page
  const relevantCourses = university.courses?.filter(course => 
    searchTerm && course.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{university.name}</CardTitle>
                  <CardDescription className="text-lg">{university.country}</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Badge>QS: {university.qsRank}</Badge>
                  <Badge variant="secondary">THE: {university.theRank}</Badge>
                </div>
              </div>
            </CardHeader>
             <CardContent>
                <Button asChild>
                    <a href={university.website} target="_blank" rel="noopener noreferrer">
                        Visit University Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
             </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Relevant Courses for "{searchTerm}"</CardTitle>
              <CardDescription>Click on a course to see more details and a direct link to the program page.</CardDescription>
            </CardHeader>
            <CardContent>
              {relevantCourses.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {relevantCourses.map((course, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="text-lg">{course.name}</AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        <p>{course.details}</p>
                        <Button variant="outline" asChild>
                            <a href={course.url} target="_blank" rel="noopener noreferrer">
                                Go to Course Page
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-muted-foreground">No specific course data available for "{searchTerm}" at this university. Check the university website for more information.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityDetail;
