"use client";
import { useState } from "react";

interface Ornament {
  ornamentType: string;
  noOfPieces: string;
  grossWeight: string;
  netWeight: string;
  caratage: string;
  appraisedValue: string;
  defects: string;
}

interface FormData {
  applicationNo: string;
  branchName: string;
  date: string;
  productName: string;
  urn: string;
  dob: string;
  name: string;
  fatherName: string;
  motherName: string;
  spouseName: string;
  category: string;
  religion: string;
  income: string;
  sourceOfIncome: string;
  gender: string;
  maritalStatus: string;
  occupation: string;
  repaymentMode: string;
  permanentAddress: string;
  currentAddress: string;
  mobile: string;
  phone: string;
  pan: string;
  aadhaar: string;
  filePreview: string;
  ornamentImage1: string;
  bankAccountNumberDisbursement: string;
  bankAccountNumberSI: string;
  ornaments: Ornament[];
}


const GoldLoanForm = () => {
    const [formData, setFormData] = useState<FormData>({
        applicationNo: "",
        branchName: "",
        date: "",
        productName: "",
        urn: "",
        dob: "",
        name: "",
        fatherName: "",
        motherName: "",
        spouseName: "",
        category: "",
        religion: "",
        income: "",
        sourceOfIncome: "",
        gender: "",
        maritalStatus: "",
        occupation: "",
        repaymentMode: "",
        permanentAddress: "",
        currentAddress: "",
        mobile: "",
        phone: "",
        pan: "",
        aadhaar: "",
        filePreview: "",
        bankAccountNumberDisbursement: "",
        bankAccountNumberSI: "",
        ornamentImage1: "",
        ornaments: [
            {
                ornamentType: "",
                noOfPieces: "",
                grossWeight: "",
                netWeight: "",
                caratage: "",
                appraisedValue: "",
                defects: "",
            },
        ],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setFormData((prev) => ({ ...prev, filePreview: reader.result as string }));
            reader.readAsDataURL(file);
        }
    };

    const addOrnament = () => {
        setFormData((prev) => ({
            ...prev,
            ornaments: [
            ...prev.ornaments,
            {
                ornamentType: "",
                noOfPieces: "",
                grossWeight: "",
                netWeight: "",
                caratage: "",
                appraisedValue: "",
                defects: "",
                ornamentImage1: "",
                ornamentImage2: "",
            },
            ],
        }));
        };

    const removeOrnament = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            ornaments: prev.ornaments.filter((_, i) => i !== index),
        }));
    };

    // For ornament fields
    const handleOrnamentChange = (
        index: number,
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        const newOrnaments = [...formData.ornaments];
        // TypeScript ko pata hai Ornament ke andar string fields hain
        newOrnaments[index] = { ...newOrnaments[index], [name]: value };
        setFormData((prev) => ({ ...prev, ornaments: newOrnaments }));
    };

    const handleOrnamentImage1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setFormData((prev) => ({ ...prev, [`ornamentImage1`]: reader.result as string }));
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.print();
    };

    return (
        <div className="p-6">
            <style>
                {`
            @media print {
                @page {
                    size: A4;
                    margin: 25px;
                }
                * {
                font-family: Times New Roman, serif;
                }

                table * {
                    line-height: 1.2;
                    padding: 0;
                    margin: 0;
                }

                .small-text * {
                    font-size: 10px;
                }

                .spaced-table td {
                    padding: 18px 0;
                }

                .spaced-table td:first-child {
                    padding-right: 20px;
                    max-width: 250px;
                    min-width: 250px;
                    font-weight: bold;
                }

                .margin-l {
                    margin-left: 40px;
                    margin-bottom: 20px;
                }

                .margin-top {
                    margin-top: 20px;
                }

                // .ornament-table tr, td {
                //     font-size: 14px;
                // }

                .oranament-table tr {
                
                    page-break-inside: auto;
                }

                .oranament-table td {
                    /* force border print on split */
                    -webkit-box-decoration-break: clone;
                    box-decoration-break: clone;
                }


                .page-break-before {
                    page-break-before: always;
                }
            }
            `}
            </style>

            {/* Form Section (hidden in print) */}
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl print:hidden dark:bg-gray-900 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Gold Loan Application Form</h2>

                {/* Borrower Image */}
                <div>
                    <label className="block text-sm font-medium mb-1">Borrower Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full border rounded px-3 py-2" />
                </div>

                {/* Application Details */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Application No</label>
                        <input name="applicationNo" placeholder="100730000004773" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Branch Name</label>
                        <input name="branchName" onChange={handleChange} placeholder="Jalandhar 2 CB-3292" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input type="date" name="date" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input name="productName" onChange={handleChange} placeholder="873 General Bullet" className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">URN</label>
                        <input name="urn" onChange={handleChange} placeholder="7260520145815093" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Applicant Name</label>
                        <input name="name" onChange={handleChange} placeholder="MR.APPLICANT NAME" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Date of Birth</label>
                        <input type="date" name="dob" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Father&apos;s Name</label>
                        <input name="fatherName" onChange={handleChange} placeholder="Father Name" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mother&apos;s Name</label>
                        <input name="motherName" onChange={handleChange} placeholder="Mother Name" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Spouse Name</label>
                        <input name="spouseName" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {/* Other Info */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <input name="category" onChange={handleChange} placeholder="GENERAL" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Religion</label>
                        <input name="religion" onChange={handleChange} placeholder="HINDU" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Income</label>
                        <input name="income" onChange={handleChange} placeholder="1-5 Lakh" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Source of Income</label>
                        <input name="sourceOfIncome" onChange={handleChange} placeholder="Employed" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Gender</label>
                        <select name="gender" onChange={handleChange} className="w-full border rounded px-3 py-2">
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Marital Status</label>
                        <select name="maritalStatus" onChange={handleChange} className="w-full border rounded px-3 py-2">
                            <option value="">Select</option>
                            <option>Bachelor</option>
                            <option>Married</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Occupation</label>
                        <input name="occupation" onChange={handleChange} placeholder="Self Employed" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Repayment Mode</label>
                        <input name="repaymentMode" onChange={handleChange} placeholder="cash" className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {/* Addresses */}
                <div>
                    <label className="block text-sm font-medium mb-1">Permanent Address</label>
                    <textarea
                        name="permanentAddress"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    ></textarea>
                    </div>

                    <div className="flex items-center gap-2 my-2">
                    <input
                        type="checkbox"
                        id="sameAddress"
                        onChange={(e) => {
                        if (e.target.checked) {
                            setFormData({
                            ...formData,
                            currentAddress: formData.permanentAddress,
                            });
                        } else {
                            setFormData({
                            ...formData,
                            currentAddress: "",
                            });
                        }
                        }}
                    />
                    <label htmlFor="sameAddress" className="text-sm">
                        Current address same as permanent
                    </label>
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Current Address</label>
                    <textarea
                        name="currentAddress"
                        value={formData.currentAddress}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                    ></textarea>
                    </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input name="mobile" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input name="phone" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">PAN/Form 60</label>
                        <input name="pan" onChange={handleChange} placeholder="PAN Number" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Aadhaar Number</label>
                        <input name="aadhaar" onChange={handleChange} placeholder="Aadhaar Number" className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                <hr />

                <div>Ornament Details</div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Bank Account Number for disbursement </label>
                        <input name="bankAccountNumberDisbursement" placeholder="3292010067196811" onChange={handleChange} className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Bank Account Number for SI </label>
                        <input name="bankAccountNumberSI" onChange={handleChange} placeholder="3292010067196811" className="w-full border rounded px-3 py-2" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Ornament Image 1</label>
                        <input type="file" accept="image/*" onChange={handleOrnamentImage1Change} className="w-full border rounded px-3 py-2" />
                    </div>
                </div>

                {formData.ornaments.map((ornament, index) => (
                    <div key={index} className="border p-4 mb-4 rounded">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Ornament Type</label>
                            <input
                                name="ornamentType"
                                value={ornament.ornamentType}
                                onChange={(e) => handleOrnamentChange(index, e)}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">No. of Pieces</label>
                            <input
                                name="noOfPieces"
                                value={ornament.noOfPieces}
                                onChange={(e) => handleOrnamentChange(index, e)}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Gross Weight</label>
                                <input name="grossWeight" value={ornament.grossWeight} onChange={(e) => handleOrnamentChange(index, e)} className="w-full border rounded px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Net Weight</label>
                                <input name="netWeight" value={ornament.netWeight} onChange={(e) => handleOrnamentChange(index, e)} className="w-full border rounded px-3 py-2" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Caratage</label>
                                <input name="caratage" value={ornament.caratage} onChange={(e) => handleOrnamentChange(index, e)} className="w-full border rounded px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Appraised Value</label>
                                <input name="appraisedValue" value={ornament.appraisedValue} onChange={(e) => handleOrnamentChange(index, e)} className="w-full border rounded px-3 py-2" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Defects if Any</label>
                                <input name="defects" value={ornament.defects} onChange={(e) => handleOrnamentChange(index, e)} className="w-full border rounded px-3 py-2" />
                            </div>
                        </div>
                    </div>

                    {/* Add other ornament fields (grossWeight, netWeight, etc.) same as before */}

                    {/* Remove Button */}
                    {formData.ornaments.length > 1 && (
                        <button
                        type="button"
                        onClick={() => removeOrnament(index)}
                        className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
                        >
                        Remove
                        </button>
                    )}
                    </div>
                ))}

                {/* Add More Button */}
                <button
                    type="button"
                    onClick={addOrnament}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add More
                </button>

                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Print / Save as PDF
                </button>
            </form>

            {/* Form Section (hidden in print) */}
            {/* <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md print:hidden">
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <input name="applicationNo" placeholder="Application No" onChange={handleChange} />
                <input name="branchName" placeholder="Branch Name" onChange={handleChange} />
                <input type="date" name="date" onChange={handleChange} />
                <input name="productName" placeholder="Product Name" onChange={handleChange} />
                <input name="urn" placeholder="Urn" onChange={handleChange} />
                <input name="name" placeholder="Applicant Name" onChange={handleChange} />
                <input type="date" name="dob" onChange={handleChange} />
                <input name="fatherName" placeholder="Father's Name" onChange={handleChange} />
                <input name="motherName" placeholder="Mother's Name" onChange={handleChange} />
                <input name="spouseName" placeholder="Spouse Name" onChange={handleChange} />
                <input name="category" placeholder="Category" onChange={handleChange} />
                <input name="religion" placeholder="Religion" onChange={handleChange} />
                <input name="income" placeholder="Income" onChange={handleChange} />
                <input name="sourceOfIncome" placeholder="Source of Income" onChange={handleChange} />
                <select name="gender" onChange={handleChange}>
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <select name="maritalStatus" onChange={handleChange}>
                    <option value="">Marital Status</option>
                    <option>Bachelor</option>
                    <option>Married</option>
                </select>
                <input name="occupation" placeholder="Occupation" onChange={handleChange} />
                <input name="repaymentMode" placeholder="Repayment Mode" onChange={handleChange} />
                <textarea name="permanentAddress" placeholder="Permanent Address" onChange={handleChange}></textarea>
                <textarea name="currentAddress" placeholder="Current Address" onChange={handleChange}></textarea>
                <input name="mobile" placeholder="Mobile Number" onChange={handleChange} />
                <input name="phone" placeholder="Phone Number" onChange={handleChange} />
                <input name="pan" placeholder="PAN/Form 60" onChange={handleChange} />
                <input name="aadhaar" placeholder="Aadhaar Number" onChange={handleChange} />

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Print / Save as PDF</button>
            </form> */}

            {/* Print Preview Section (visible only in print) */}
            <div id="print-section" className=" print:block">

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/jana-finance-logo.png" alt="Bank Logo" className="h-[80px] mb-16 -ml-4" />
                <h1 className="font-bold mb-4 text-center">Gold Loan Application Form</h1>

                <table className="w-full border-collapse mt-12">
                    <tbody>
                        <tr>
                            <td className="w-1/3 border border-2">Borrower Image</td>
                            <td className="border border-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={formData.filePreview} alt="Borrower" className="w-[200px] h-[200px]" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="w-full mb-4 border-collapse">
                    <tbody>
                        <tr>
                            <td className="border border-2 w-[100px]">Application No</td>
                            <td className="border border-2 w-[100px]">{formData.applicationNo}</td>
                            <td className="border border-2 w-[100px]">Branch Name</td>
                            <td className="border border-2 w-[100px]">{formData.branchName}</td>
                        </tr>
                        <tr>
                            <td className="border border-2">Date</td>
                            <td className="border border-2">{formData.date ? new Date(formData.date).toLocaleDateString() : ''}</td>
                            <td className="border border-2">Product</td>
                            <td className="border border-2">{formData.productName}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-12 mb-3 font-bold text-center">Applicant&apos;s Personal Details</div>
                <table className="border-collapse">
                    <tbody>
                        <tr>
                            <td className="w-[100px] border border-2 word-break">Urn</td>
                            <td className="w-[100px] border border-2 word-break">{formData.urn}</td>
                            <td className="w-[100px] border border-2 word-break">Date of Birth</td>
                            <td className="w-[100px] border border-2 word-break">{formData.dob ? new Date(formData.dob).toLocaleDateString() : ''}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Name</td>
                            <td className="border border-2 word-break">{formData.name}</td>
                            <td className="border border-2 word-break">Spouse Name</td>
                            <td className="border border-2 word-break">{formData.spouseName}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Father&apos;s Name</td>
                            <td className="border border-2 word-break">{formData.fatherName}</td>
                            <td className="border border-2 word-break">Category Of The Borrower</td>
                            <td className="border border-2 word-break">{formData.category}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Mother&apos;s Name</td>
                            <td className="border border-2 word-break">{formData.motherName}</td>
                            <td className="border border-2 word-break">Religion</td>
                            <td className="border border-2 word-break">{formData.religion}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Income</td>
                            <td className="border border-2 word-break">{formData.income}</td>
                            <td className="border border-2 word-break">Source of Income</td>
                            <td className="border border-2 word-break">{formData.sourceOfIncome}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Gender</td>
                            <td className="border border-2 word-break">{formData.gender}</td>
                            <td className="border border-2 word-break">Marital Status</td>
                            <td className="border border-2 word-break">{formData.maritalStatus}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Business/Occupation</td>
                            <td className="border border-2 word-break">{formData.occupation}</td>
                            <td className="border border-2 word-break">Loan Repayment Mode</td>
                            <td className="border border-2 word-break">{formData.repaymentMode}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Permanent Address</td>
                            <td className="border border-2 word-break">{formData.permanentAddress}</td>
                            <td className="border border-2 word-break">Current Address1</td>
                            <td className="border border-2 word-break">{formData.currentAddress}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">Mobile</td>
                            <td className="border border-2 word-break">{formData.mobile}</td>
                            <td className="border border-2 word-break">Phone1</td>
                            <td className="border border-2 word-break">{formData.phone}</td>
                        </tr>
                        <tr>
                            <td className="border border-2 word-break">PAN/ Form 60</td>
                            <td className="border border-2 word-break">{formData.pan}</td>
                            <td className="border border-2 word-break">AadhaarNumber</td>
                            <td className="border border-2 word-break">{formData.aadhaar}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="page-break-before"></div>
                <div className="small-text">
                    <p className="mt-12 mb-10">We look forward to our continued relationship.</p>
                    <p className="font-bold mb-4">Yours Sincerely,</p>
                    <p className="font-bold mb-4">Authorized Signatory</p>
                    <p className="font-bold mb-18">Jana Small Finance Bank Limited</p>

                    <div className="font-bold underline text-center print:text-[12px] mb-3">ANNEXURE I</div>
                    <div className="font-bold underline text-center print:text-[12px]">SANCTION TERMS</div>
                    <table className="w-full border-collapse mt-4 spaced-table">
                        <tbody>
                            <tr>
                                <td className="">Name and Address  of the Borrower / Pledger</td>
                                <td className="">{formData.name} & {formData.currentAddress}</td>
                            </tr>
                            <tr>
                                <td className="">Branch Name</td>
                                <td className="">{formData.branchName}</td>
                            </tr>
                            <tr>
                                <td className="">URN</td>
                                <td className="">{formData.urn}</td>
                            </tr>
                            <tr>
                                <td className="">Loan Account No</td>
                                <td className="">32928730011057</td>
                            </tr>
                            <tr>
                                <td className="">Facility Amount</td>
                                <td className="">
                                    {formData.ornaments.reduce(
                                        (sum, ornament) => sum + Number(ornament.appraisedValue || 0),
                                        0
                                    )}
                                </td>

                            </tr>
                            <tr>
                                <td className="">Purpose</td>
                                <td className="">Personal Need</td>
                            </tr>
                            <tr>
                                <td className="">Tenure</td>
                                <td className="">6</td>
                            </tr>
                            <tr>
                                <td className="">Bank Account Number for disbursement</td>
                                <td className="">{formData.bankAccountNumberDisbursement}</td>
                            </tr>
                            <tr>
                                <td className="">Rate of Interest</td>
                                <td className="">Fixed Rate - 20.99 %p.a.</td>
                            </tr>
                            <tr>
                                <td className="">Repayable In</td>
                                <td className="">NA</td>
                            </tr>
                            <tr>
                                <td className="">EMI (If Applicable)</td>
                                <td className="">NA</td>
                            </tr>
                            <tr>
                                <td className="">Maturity Date of the Facility</td>
                                <td className="">{formData.date
                                    ? (() => {
                                        const d = new Date(formData.date);
                                        d.setMonth(d.getMonth() + 6);
                                        return d.toLocaleDateString("en-GB"); // dd/mm/yyyy format
                                    })()
                                    : ""}
                                </td>
                            </tr>
                            <tr>
                                <td className="">Mode of Repayment</td>
                                <td className=""></td>
                            </tr>
                            <tr>
                                <td className="">Bank Account Number for SI </td>
                                <td className="">{formData.bankAccountNumberSI}</td>
                            </tr>
                            <tr>
                                <td className="">Other Terms and Conditions</td>
                                <td className="">NA</td>
                            </tr>
                            <tr>
                                <td className="font-bold">Details of SPDC</td>
                                <td className="">No</td>
                            </tr>
                            <tr>
                                <td className="">Mode of communication of changes in interest rates</td>
                                <td className="">Email/ Letter/ Bank&apos;s website</td>
                            </tr>
                            <tr>
                                <td className="">Processing Fees (Non-Refundable)</td>
                                <td className="">Rs.215</td>
                            </tr>
                            <tr>
                                <td className="">Documentation Charges/ Appraiser charges</td>
                                <td className="">293.82</td>
                            </tr>
                            <tr>
                                <td className="">Penal Charges</td>
                                <td className="">Incase of default/delayed payment, 24% p.a. on overdue amount + Taxes as applicable</td>
                            </tr>
                            <tr>
                                <td className="">Part-Payment Charges (if any)</td>
                                <td className="">2% of part payment or a minimum of Rs. 200/- will be charged</td>
                            </tr>
                            <tr>
                                <td className="">Pre Closure charges</td>
                                <td className="">2% +GST</td>
                            </tr>
                            <tr>
                                <td className="">Pre-Disbursement Conditions</td>
                                <td className="">
                                    <ol className="list-decimal marker:text-[14px] margin-l">
                                        <li>Valuation of Pledged Gold by an appraiser appointed by the Bank;</li>
                                        <li>Payment of processing fees;</li>
                                        <li>Submission of required SI mandate/NACH/Cheques for repayment of Facility;</li>
                                        <li>Execution and delivery of Application Form, Master Facility Agreement and such other document as 
                                            the Bank may require; and
                                        </li>
                                    </ol>
                                    <p>Compliance of such other condition as the Bank may stipulate.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="">Hospicash Insurance Opted*</td>
                                <td className="">
                                    <p>YES</p>
                                    <p className="font-bold italic margin-top">Borrower understands that the insurance is a third-party product and the Bank makes no representation or 
                                        warranty regarding the insurance policy voluntarily opted by them. The Borrower further understands that the 
                                        claims in relation to the insurance policy voluntarily opted by them shall be done at the sole discretion of the 
                                        insurance company and neither the Bank nor its officers are in any way responsible for the same.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="">Insurance Amount</td>
                                <td className="">299</td>
                            </tr>
                            <tr>
                                <td className="">Life Insurance Amount</td>
                                <td className="">+ GST</td>
                            </tr>
                            <tr>
                                <td className="">Ornament Details</td>
                                <td className=""></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                
                <table className="w-full border border-separate border-spacing-[1px] ornament-table">
                    <thead>
                        <tr>
                            <th colSpan={8} className="border text-center font-bold">Ornament Details & Appraiser Certificate</th>
                        </tr>
                        <tr>
                            <th className="border text-center font-bold">Ornament<br></br>Type</th>
                            <th className="border text-center font-bold">No. of<br></br>Pieces</th>
                            <th className="border text-center font-bold">Gross<br></br>Weight</th>
                            <th className="border text-center font-bold">Net<br></br>Weight</th>
                            <th className="border text-center font-bold">Caratage</th>
                            <th className="border text-center font-bold">Appraised<br></br>Value</th>
                            <th className="border text-center font-bold">Defects if<br></br>Any</th>
                            <th className="border text-center font-bold">Ornament&nbsp;Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.ornamentType}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.noOfPieces}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.grossWeight}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.netWeight}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.caratage}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i} className="word-break">{ornament.appraisedValue}</div>; })}</td>
                            <td className="border word-break">{formData.ornaments.map((ornament, i) => { return <div key={i}>{ornament.defects}</div>; })}</td>
                            <td className="border word-break">
                                {formData.ornamentImage1 && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={formData.ornamentImage1} alt="Ornament 1" className="w-[100px] h-[100px] m-[2px]" />
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GoldLoanForm;