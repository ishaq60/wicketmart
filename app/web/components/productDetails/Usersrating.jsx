"use client";

import { Button } from "@/components/ui/button";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

const StarRating = ({ rating = 2 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-8 h-6 ${
            i < rating ? "fill-black text-black" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const UsersRating = ({ product }) => {
  const { reviews = [] } = product || {};

  return (
    <div className="mt-24 min-h-screen px-4">
      <h1 className="text-center text-4xl font-bold">Users Rating</h1>

      <Dialog className="w-[650px]">
        <form>
          <DialogTrigger asChild>
            <Button className="text-white font-bold my-8 hover:bg-red-500 px-6 text-2xl">
              Write Your Review
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] h-[750px] lg:max-w-[1050px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Write down Your Review
              </DialogTitle>
              <DialogDescription className="text-xl font-bold">
                *All fields are required unless marked optional.
              </DialogDescription>
            </DialogHeader>
            <div className="grid mb-6 ">
              <div className="grid gap-3">
                <Label className="w-2 text-xl font-bold" htmlFor="name-1">
                  Title
                </Label>
                <Input
                  className="p-6"
                  id="name-1"
                  name="name"
                  placeholder="Enter the Title here"
                  defaultValue="title"
                />
              </div>
              <div className="grid gap-3">
                <Label
                  className="w-2 border-gray-200 text-xl font-bold"
                  htmlFor="username-1"
                >
                  Username
                </Label>
                <Input
                  className="p-10 border border-gray-300"
                  id="Description"
                  name="description"
                  defaultValue="@peduarte"
                />
              </div>
              <h1 className="mt-4 tex-xl font-bold">Rating</h1>
              <h1 className="text-xl font-bold mt-3">
                Would you recommend this product?
              </h1>
              <RadioGroup defaultValue="comfortable">
                <div className="flex text-3xl items-center gap-3">
                  <RadioGroupItem
                    className="text-2xl"
                    value="comfortable"
                    id="r2"
                  />
                  <Label className="w-2 text-xl" htmlFor="r2">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label className="w-2 text-xl" htmlFor="r3">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  className="text-black text-xl py-6 px-8 h-2"
                  variant="outline"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                className="hover:bg-red-500 text-white text-xl py-6 px-8 h-2"
                type="submit"
              >
                submit
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      {/* Sort & Rating */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 px-4">
        <div className="flex items-center text-black text-2xl gap-2">
          <StarRating rating={3} />
          <span className="text-md">| 3 Ratings</span>
        </div>

        <div>
          <p className="font-bold text-lg mb-2">Sort By</p>
          <Select>
            <SelectTrigger className="sm:w-[150px] md:w-[200px] lg:w-[200px] h-12 border-black">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-2xl font-bold" value="highest">
                Highest Rated
              </SelectItem>
              <SelectItem className="text-2xl font-bold" value="lowest">
                Lowest Rated
              </SelectItem>
              <SelectItem className="text-2xl font-bold" value="latest">
                Latest
              </SelectItem>
              <SelectItem className="text-2xl font-bold" value="oldest">
                Oldest
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-gray-100 mt-20 shadow-sm px-4 py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="w-full max-w-[500px] h-[600px] mx-auto flex flex-col justify-between"
            >
              <CardHeader>
                <div className="flex gap-x-4">
                  <Avatar className="mt-2">
                    <AvatarImage
                      className="w-[100px] mt- h-10"
                      src={review.userimage}
                      alt={review.username}
                    />
                    <AvatarFallback>{review.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-2 font-semibold text-2xl">
                    {review.title}
                  </CardTitle>
                </div>
                <CardDescription>
                  <div className="flex mt-6 justify-start top-6 text-2xl gap-2">
                    <StarRating rating={review.rating || 3} />
                  </div>
                </CardDescription>
                <CardAction>
                  <Button className="text-md mt-2 font-bold" variant="link">
                    {review.date}
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="item-top mb-40">
                <p>{review.comment}</p>
                <h1 className="text-xl font-bold mt-4">
                  Would you recommend this product?{" "}
                  {review.recommend ? "Yes" : "No"}
                </h1>
              </CardContent>
              <CardFooter className="gap-2">
                <div className="flex gap-4">
                  <AiFillLike size={40} /> {review.likes}
                  <AiFillDislike size={40} /> {review.dislikes}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersRating;
