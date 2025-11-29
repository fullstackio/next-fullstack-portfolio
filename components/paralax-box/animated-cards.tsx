"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AnimatedCards() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Parallax for Card 2
  const card2Y = useTransform(scrollY, [600, 1400], [0, -200]);

  // Parallax for Card 3 (overlapping effect)
  const card3Y = useTransform(scrollY, [1000, 1800], [0, -250]);
  const card3Z = useTransform(scrollY, [1000, 1800], [0, 5]);

  return (
    <div ref={containerRef}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.2 }}
        variants={containerVariants}
        className="py-12"
      >
        <motion.div variants={cardVariants}>
          <Card>
            <CardHeader>
              <CardTitle>Card 1 Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div style={{ y: card2Y }}>
        <Card className="my-8">
          <CardHeader>
            <CardTitle>Card 2 Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div style={{ y: card3Y, zIndex: card3Z }}>
        <Card className="my-8">
          <CardHeader>
            <CardTitle>Card 3 Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
