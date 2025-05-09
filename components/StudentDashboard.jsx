"use client";

import { useState, useEffect, useMemo } from "react";
import {
  FiUpload,
  FiDownload,
  FiSearch,
  FiUserPlus,
  FiRefreshCw,
  FiFilter,
  FiChevronDown,
  FiExternalLink,
  FiCheck,
  FiX,
  FiAlertCircle,
  FiInfo,
} from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StudentDashboard() {
  // State management
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    abcId: "",
    debId: "",
    name: "",
    dob: "",
    verified: "",
  });

  // Modal states
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [registerData, setRegisterData] = useState({
    name: "",
    mobile: "",
  });
  const [verifyData, setVerifyData] = useState({
    mobile: "",
  });
  const [currentStudent, setCurrentStudent] = useState(null);
  const [errors, setErrors] = useState({});

  // Fetch data on mount
  useEffect(() => {
    fetchStudents();
  }, []);

  // Data fetching function
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/students");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setStudents(data);
      setError(null);
      toast.success("Data loaded successfully");
    } catch (err) {
      console.error("Error fetching students:", err);
      setError(err.message);
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  // Calculate verification stats
  const verifiedStats = useMemo(() => {
    const verifiedCount = students.filter((s) => s.mobileNumber).length;
    return {
      verified: verifiedCount,
      pending: students.length - verifiedCount,
      percentage:
        students.length > 0
          ? Math.round((verifiedCount / students.length) * 100)
          : 0,
    };
  }, [students]);

  // Handlers
  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchStudents();
  };

  const validateRegisterForm = () => {
    const newErrors = {};

    if (!registerData.name || registerData.name.trim().length < 3) {
      newErrors.name = "Please enter a valid name (at least 3 characters)";
    }

    if (!registerData.mobile || !/^\d{10}$/.test(registerData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    } else if (!/^[6-9]\d{9}$/.test(registerData.mobile)) {
      newErrors.mobile =
        "Please enter a valid Indian mobile number starting with 6-9";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateVerifyForm = () => {
    const newErrors = {};

    if (!verifyData.mobile || !/^\d{10}$/.test(verifyData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    } else if (!/^[6-9]\d{9}$/.test(verifyData.mobile)) {
      newErrors.mobile =
        "Please enter a valid Indian mobile number starting with 6-9";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNoId = () => {
    setShowRegisterModal(true);
    setRegisterData({ name: "", mobile: "" });
    setErrors({});
  };

  const handleRegisterSubmit = () => {
    if (!validateRegisterForm()) return;

    setConfirmAction({
      type: "register",
      title: "Confirm Registration Details",
      message: (
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {registerData.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Mobile:</span> {registerData.mobile}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            You're about to open WhatsApp to complete registration.
          </p>
        </div>
      ),
      onConfirm: () => {
        const message = `New Registration Request:%0A%0AName: ${encodeURIComponent(
          registerData.name
        )}%0AMobile: ${registerData.mobile}%0A%0AI don't have an ABC ID`;
        window.open(
          `https://api.whatsapp.com/send?phone=9921076909&text=${message}`,
          "_blank"
        );
        toast.info(
          "Opening WhatsApp for registration. Please complete the verification process."
        );
        setShowRegisterModal(false);
      },
    });
    setShowConfirmModal(true);
  };

  const handleSelectRow = (student) => {
    if (student.mobileNumber) {
      toast.info("This student is already verified");
      return;
    }
    setCurrentStudent(student);
    setShowVerifyModal(true);
    setVerifyData({ mobile: "" });
    setErrors({});
  };

  const handleVerifySubmit = () => {
    if (!validateVerifyForm()) return;

    setConfirmAction({
      type: "verify",
      title: "Confirm Verification Details",
      message: (
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-medium">ABC ID:</span> {currentStudent.abcId}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Name:</span>{" "}
            {currentStudent.studentName}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Mobile:</span> {verifyData.mobile}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            You're about to open WhatsApp to complete verification.
          </p>
        </div>
      ),
      onConfirm: () => {
        const message = `Student Verification Request:%0A%0AABC ID: ${
          currentStudent.abcId
        }%0ADEB ID: ${currentStudent.debId}%0AName: ${encodeURIComponent(
          currentStudent.studentName
        )}%0ADOB: ${currentStudent.dateOfBirth}%0AMobile: ${verifyData.mobile}`;
        window.open(
          `https://api.whatsapp.com/send?phone=9921076909&text=${message}`,
          "_blank"
        );
        toast.info(
          "Opening WhatsApp for verification. Please complete the verification process."
        );
        setShowVerifyModal(false);
      },
    });
    setShowConfirmModal(true);
  };

  // Filtering and pagination logic
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch = Object.values(student).some((value) =>
        value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );

      const matchesFilters =
        (!filters.abcId || student.abcId.includes(filters.abcId)) &&
        (!filters.debId || student.debId.includes(filters.debId)) &&
        (!filters.name ||
          student.studentName
            .toLowerCase()
            .includes(filters.name.toLowerCase())) &&
        (!filters.dob || student.dateOfBirth.includes(filters.dob)) &&
        (filters.verified === "" ||
          (filters.verified === "verified" && student.mobileNumber) ||
          (filters.verified === "pending" && !student.mobileNumber));

      return matchesSearch && matchesFilters;
    });
  }, [students, searchTerm, filters]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredStudents.length / rowsPerPage);
  const paginatedStudents = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return filteredStudents.slice(startIndex, startIndex + rowsPerPage);
  }, [filteredStudents, currentPage, rowsPerPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={5000} />

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl transform transition-all duration-300">
            <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-start">
              <h2 className="text-2xl font-semibold text-gray-900">
                Register New Student
              </h2>
              <button
                onClick={() => setShowRegisterModal(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 py-4 space-y-5">
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className={`block w-full px-4 py-2 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter your full name"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, name: e.target.value })
                    }
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <FiAlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Mobile Number Field */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="mobile"
                    className={`block w-full px-4 py-2 border ${
                      errors.mobile ? "border-red-500" : "border-gray-300"
                    } rounded-lg text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Enter 10-digit mobile number"
                    maxLength="10"
                    value={registerData.mobile}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        mobile: e.target.value,
                      })
                    }
                  />
                  {errors.mobile && (
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <FiAlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </div>
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  Must be a valid Indian mobile number starting with 6–9
                </p>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="px-6 py-4 border-t border-gray-100 flex justify-end space-x-3">
              <button
                onClick={() => setShowRegisterModal(false)}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleRegisterSubmit}
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Verify Modal */}
     {showVerifyModal && currentStudent && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl transform transition-all duration-300">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-start">
        <h2 className="text-2xl font-semibold text-gray-900">Verify Student</h2>
        <button
          onClick={() => setShowVerifyModal(false)}
          className="text-gray-500 hover:text-gray-700 transition"
          aria-label="Close modal"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-6">
        {/* Student Info Card */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-md space-y-1">
          <p className="text-sm text-gray-800">
            <span className="font-medium">ABC ID:</span> {currentStudent.abcId}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-medium">Name:</span> {currentStudent.studentName}
          </p>
          <p className="text-sm text-gray-800">
            <span className="font-medium">DOB:</span> {currentStudent.dateOfBirth}
          </p>
        </div>

        {/* Mobile Input */}
        <div>
          <label
            htmlFor="verifyMobile"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mobile Number
          </label>
          <div className="relative">
            <input
              type="tel"
              id="verifyMobile"
              className={`block w-full px-4 py-2 border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } rounded-lg text-gray-800 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Enter 10-digit mobile number"
              maxLength="10"
              value={verifyData.mobile}
              onChange={(e) =>
                setVerifyData({ ...verifyData, mobile: e.target.value })
              }
            />
            {errors.mobile && (
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <FiAlertCircle className="w-5 h-5 text-red-500" />
              </div>
            )}
          </div>
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Must be a valid Indian mobile number starting with 6–9
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 flex justify-end space-x-3">
        <button
          onClick={() => setShowVerifyModal(false)}
          className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          onClick={handleVerifySubmit}
          className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Continue to WhatsApp
        </button>
      </div>
    </div>
  </div>
)}


      {/* Confirmation Modal */}
      {showConfirmModal && confirmAction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <FiInfo className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {confirmAction.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600">
                    {confirmAction.message}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex justify-end space-x-3">
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    confirmAction.onConfirm();
                    setShowConfirmModal(false);
                  }}
                  className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Student ABC/DEB ID Management
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Comprehensive view and management of all student ABC/DEB ID Records
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                <FiUserPlus className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Students
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {loading ? "--" : students.length.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                <FiCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Verified ({verifiedStats.percentage}%)
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {loading ? "--" : verifiedStats.verified.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-500">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
                <FiX className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pending Verification
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {loading ? "--" : verifiedStats.pending.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {/* Toolbar */}
          <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search students..."
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-500 text-black"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isRefreshing ? (
                  <>
                    <FiRefreshCw className="animate-spin mr-2" /> Refreshing...
                  </>
                ) : (
                  <>
                    <FiRefreshCw className="mr-2" /> Refresh
                  </>
                )}
              </button>

              <button
                onClick={handleNoId}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-sm font-medium text-white hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm"
              >
                <FiUserPlus className="mr-2" /> Register New
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            {error ? (
              <div className="p-6 text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-50 text-red-700">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Error loading data: {error}
                </div>
                <button
                  onClick={handleRefresh}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Retry
                </button>
              </div>
            ) : loading ? (
              <div className="p-12 flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600">Loading student data...</p>
              </div>
            ) : (
              <>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12"
                      >
                        Sr. No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        ABC ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        DEB ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Student Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date of Birth
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginatedStudents.length > 0 ? (
                      paginatedStudents.map((student, index) => (
                        <tr key={student.abcId} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {(currentPage - 1) * rowsPerPage + index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {student.abcId}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.debId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                            {student.studentName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {student.dateOfBirth}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {student.mobileNumber ? (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                <FiCheck className="mr-1" /> Verified
                              </span>
                            ) : (
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                <FiX className="mr-1" /> Pending
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {student.mobileNumber ? (
                              <span className="text-gray-400">
                                Already verified
                              </span>
                            ) : (
                              <button
                                onClick={() => handleSelectRow(student)}
                                className="text-blue-600 hover:text-blue-900 inline-flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded"
                              >
                                Verify <FiExternalLink className="ml-1" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-6 py-4 text-center text-sm text-gray-500"
                        >
                          No students found matching your criteria
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* Pagination */}
                {filteredStudents.length > 0 && (
                  <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {(currentPage - 1) * rowsPerPage + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(
                              currentPage * rowsPerPage,
                              filteredStudents.length
                            )}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {filteredStudents.length}
                          </span>{" "}
                          results
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <label
                            htmlFor="rowsPerPage"
                            className="mr-2 text-sm text-gray-700"
                          >
                            Rows:
                          </label>
                          <select
                            id="rowsPerPage"
                            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            value={rowsPerPage}
                            onChange={(e) => {
                              setRowsPerPage(Number(e.target.value));
                              setCurrentPage(1);
                            }}
                          >
                            {[5, 10, 25, 50, 100].map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                        <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                        >
                          <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <span className="sr-only">First</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l4-4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          {Array.from(
                            { length: Math.min(5, totalPages) },
                            (_, i) => {
                              let pageNum;
                              if (totalPages <= 5) {
                                pageNum = i + 1;
                              } else if (currentPage <= 3) {
                                pageNum = i + 1;
                              } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                              } else {
                                pageNum = currentPage - 2 + i;
                              }
                              return (
                                <button
                                  key={pageNum}
                                  onClick={() => handlePageChange(pageNum)}
                                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                    currentPage === pageNum
                                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                                  }`}
                                >
                                  {pageNum}
                                </button>
                              );
                            }
                          )}
                          <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                          >
                            <span className="sr-only">Last</span>
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
