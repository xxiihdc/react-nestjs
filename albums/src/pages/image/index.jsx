import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../../services/apiService";
import ImageCard from "../../components/ImageCard";
import useFetch from "../../hooks/useFetchData";

const ImagePage = () => {

  const { name } = useParams();
  const { data: image, loading: imageLoading, error: imageError } = useFetch(`/image/${name}`, {
    initialData: {},
  });

  const { data: comments, loading: commentsLoading, error: commentsError } = useFetch(`/comments/${name}`, {
    initialData: [],
  });

  if (imageLoading || commentsLoading) {
    return <div>Loading...</div>;
  }

  if (imageError || commentsError) {
    return <div>Error: {imageError?.message || commentsError?.message}</div>;
  }  

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/2">
          <ImageCard
            image={{
              url: `${process.env.PUBLIC_URL}/${image.name}`,
              title: image.name,
            }}
          ></ImageCard>
        </div>

        <div className="md:w-1/2 p-4">
          <div className="flex flex-col space-y-4">
          {comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={comment.avatarUrl || "https://via.placeholder.com/40"}
                    alt="User Avatar"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">{comment.username}</div>
                  <div className="text-sm text-gray-500">{comment.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
