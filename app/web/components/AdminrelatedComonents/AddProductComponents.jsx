'use client';

import { useState } from 'react';
import { Plus, X, Upload, Save } from 'lucide-react';
import { toast } from 'react-toastify';

const AddProductComponents = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    description: '',
    originalPrice: '',
    discount: '',
    discountPercentage: '',
    price: '',
    handleType: '',
    inStock: true,
    taxInclusive: true,
    offersAndDiscounts: '',
    averageRating: 0,
    ratings: 0,
    totalReviews: 0,
    images: ['', '', '', ''],
    reviews: []
  });

  const [newReview, setNewReview] = useState({
    username: '',
    userimage: '',
    title: '',
    comment: '',
    date: '',
    likes: 0,
    dislikes: 0,
    recommend: false
  });

  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const handleReviewInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewReview(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) || 0 : value)
    }));
  };

  const addReview = () => {
    if (newReview.username && newReview.title && newReview.comment) {
      setFormData(prev => ({
        ...prev,
        reviews: [...prev.reviews, { ...newReview }],
        totalReviews: prev.totalReviews + 1
      }));
      setNewReview({
        username: '',
        userimage: '',
        title: '',
        comment: '',
        date: '',
        likes: 0,
        dislikes: 0,
        recommend: false
      });
      setShowReviewForm(false);
    }
  };

  const removeReview = (index) => {
    setFormData(prev => ({
      ...prev,
      reviews: prev.reviews.filter((_, i) => i !== index),
      totalReviews: Math.max(0, prev.totalReviews - 1)
    }));
  };

  const calculatePrice = () => {
    const original = parseFloat(formData.originalPrice) || 0;
    const discount = parseFloat(formData.discount) || 0;
    const finalPrice = original - discount;
    const discountPercentage = original > 0 ? ((discount / original) * 100).toFixed(0) : 0;
    
    setFormData(prev => ({
      ...prev,
      price: finalPrice.toString(),
      discountPercentage: discountPercentage.toString()
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const productData = {
    ...formData,
    originalPrice: parseFloat(formData.originalPrice) || 0,
    discount: parseFloat(formData.discount) || 0,
    discountPercentage: parseFloat(formData.discountPercentage) || 0,
    price: parseFloat(formData.price) || 0,
    averageRating: parseFloat(formData.averageRating) || 0,
    ratings: parseInt(formData.ratings) || 0,
    totalReviews: parseInt(formData.totalReviews) || 0,
    images: formData.images.filter((img) => img.trim() !== ''),
  };

  console.log('Product Data:', productData);

  try {
    const res = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      toast.success('✅ Product added successfully!');
    } else {
      const err = await res.json();
      console.error(err);
      toast.error('❌ Failed to add product.');
    }
  } catch (err) {
    console.error(err);
    alert('❌ Something went wrong.');
  }
};


  return (
    <div className="mb-4 bg-gray-50 py-2 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <h1 className="text-2xl font-bold text-black mb-6">Add New Product</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="Enter product name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Brand *</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="Enter brand name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                >
                  <option value="">Select category</option>
                  <option value="Bat">Bat</option>
                  <option value="Ball">Ball</option>
                  <option value="Gloves">Gloves</option>
                  <option value="Pads">Pads</option>
                  <option value="Helmet">Helmet</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Handle Type</label>
                <select
                  name="handleType"
                  value={formData.handleType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                >
                  <option value="">Select handle type</option>
                  <option value="Short Handle">Short Handle</option>
                  <option value="Long Handle">Long Handle</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-black mb-3">Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Enter product description"
              />
            </div>

            {/* Pricing */}
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Original Price *</label>
                <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleInputChange}
                  onBlur={calculatePrice}
                  required
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Discount Amount</label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  onBlur={calculatePrice}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Discount %</label>
                <input
                  type="number"
                  name="discountPercentage"
                  value={formData.discountPercentage}
                  onChange={handleInputChange}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  placeholder="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Final Price</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Product Images */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">Product Images</label>
              <div className="grid md:grid-cols-2 gap-4">
                {formData.images.map((image, index) => (
                  <div key={index}>
                    <label className="block text-xs text-gray-600 mb-1">Image {index + 1}</label>
                    <input
                      type="url"
                      value={image}
                      onChange={(e) => handleImageChange(index, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                      placeholder="Enter image URL"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Status */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm font-medium text-black">In Stock</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="taxInclusive"
                  checked={formData.taxInclusive}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label className="text-sm font-medium text-black">Tax Inclusive</label>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-2">Offers & Discounts</label>
                <input
                  type="text"
                  name="offersAndDiscounts"
                  value={formData.offersAndDiscounts}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                  placeholder="e.g., 1.5 stars"
                />
              </div>
            </div>

            {/* Rating Information */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Average Rating</label>
                <input
                  type="number"
                  name="averageRating"
                  value={formData.averageRating}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Total Ratings</label>
                <input
                  type="number"
                  name="ratings"
                  value={formData.ratings}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-black mb-2">Total Reviews</label>
                <input
                  type="number"
                  name="totalReviews"
                  value={formData.totalReviews}
                  onChange={handleInputChange}
                  min="0"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                />
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-black">Product Reviews</label>
                <button
                  type="button"
                  onClick={() => setShowReviewForm(true)}
                  className="flex items-center px-3 py-1 bg-black text-white rounded-md hover:bg-gray-800 text-sm"
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Review
                </button>
              </div>

              {/* Existing Reviews */}
              {formData.reviews.length > 0 && (
                <div className="space-y-3 mb-4">
                  {formData.reviews.map((review, index) => (
                    <div key={index} className="p-3 border rounded-md bg-gray-50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-black">{review.title}</h4>
                        <button
                          type="button"
                          onClick={() => removeReview(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">By: {review.username}</p>
                      <p className="text-sm text-gray-700 mb-2">{review.comment}</p>
                      <div className="flex items-center text-xs text-gray-500 space-x-4">
                        <span>👍 {review.likes}</span>
                        <span>👎 {review.dislikes}</span>
                        <span>{review.recommend ? '✅ Recommended' : '❌ Not Recommended'}</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Review Form */}
              {showReviewForm && (
                <div className="p-4 border rounded-md bg-blue-50 mb-4">
                  <h3 className="font-medium text-black mb-3">Add New Review</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="username"
                      value={newReview.username}
                      onChange={handleReviewInputChange}
                      placeholder="Username"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                    <input
                      type="url"
                      name="userimage"
                      value={newReview.userimage}
                      onChange={handleReviewInputChange}
                      placeholder="User Image URL"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="title"
                      value={newReview.title}
                      onChange={handleReviewInputChange}
                      placeholder="Review Title"
                      className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                    <input
                      type="date"
                      name="date"
                      value={newReview.date}
                      onChange={handleReviewInputChange}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                  </div>
                  <textarea
                    name="comment"
                    value={newReview.comment}
                    onChange={handleReviewInputChange}
                    placeholder="Review Comment"
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black mb-4"
                  />
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <input
                      type="number"
                      name="likes"
                      value={newReview.likes}
                      onChange={handleReviewInputChange}
                      placeholder="Likes"
                      min="0"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                    <input
                      type="number"
                      name="dislikes"
                      value={newReview.dislikes}
                      onChange={handleReviewInputChange}
                      placeholder="Dislikes"
                      min="0"
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="recommend"
                        checked={newReview.recommend}
                        onChange={handleReviewInputChange}
                        className="mr-2"
                      />
                      <label className="text-sm text-black">Recommend</label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={addReview}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                    >
                      Add Review
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-black rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
              >
                <Save className="mr-2 h-4 w-4" />
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductComponents;