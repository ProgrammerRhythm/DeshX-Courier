import React from 'react';
import './CreateOrder.css'
const CreateOrder = () => {
    return (
        <div>
            <div class="slide-content" id="step-01">
                <h1 class="booking-page-heading">Sender Details</h1>
                <div class="step-nav">
                    <ul>
                        <li class="active" onclick="slideItem('step-01');">Sender</li>
                        <li onclick="senderInfoVerification();">Recipient</li>
                        <li onclick="recivierInfoVerifaction();">Parcel Details</li>
                        <li onclick="parcelDetailVerifiaction();">Review</li>
                    </ul>
                </div>
                <div class="form-group">
                    <label class="form-label">Sender Name <sup>*</sup></label>
                    <input name="fragile_charge" value="0" type="hidden" />
                        <input name="insurance_amount" type="hidden"  />
                            <input name="total_charge" type="hidden" />
                                <input name="discount_amount" type="hidden" />
                                    <input name="token" type="hidden" />
                                        <input class="form-control" value="" type="text" name="sender_name" placeholder="Enter sender name" />
                                            <p class="promo-failure sender_name_error" style={{display:'none'}}> Sender name required</p>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Sender Mobile No.<sup>*</sup></label>
                                            <input class="form-control" maxlength="11" value="" type="tel" onblur="checkMobileTypeSender(this.value);" name="sender_mobile" placeholder="Enter sender mobile number" />
                                                <p class="promo-failure sender_mobile_error" style={{display:'none'}}> Sender mobile required,
                                                    11 digit, Bangladeshi number
                                                </p>
                                        </div>

                                        <div class="form-group">
                                            <label class="form-label">Email <sup>*</sup></label>
                                            <input class="form-control" type="text" name="sender_email" onblur="checkEmailType(this.value);" value="" placeholder="Enter sender email" />
                                                <p class="promo-failure sender_email_error" style={{display:'none'}}> Sender email required and
                                                    valid format</p>
                                        </div>

                                        <div class="form-group">
                                            <label class="form-label">Pick Address Type <sup>*</sup></label>
                                            <label class="radio-inline" style={{margin: "0 20px 0 0"}}>
                                                <input type="radio" onclick="getSenderAddressInfo();" name="address_type" id="inlineRadio1" value="Home" /> Home
                                            </label>
                                            <label class="radio-inline" style={{margin: "0 20px 0 0"}}>
                                                <input type="radio" onclick="getSenderAddressInfo();" name="address_type" id="inlineRadio2" value="Office" /> Office
                                            </label>
                                            <label class="radio-inline" style={{margin: "0 20px 0 0"}}>
                                                <input type="radio" onclick="getSenderAddressInfo();" name="address_type" id="inlineRadio3" value="Others" /> Others
                                            </label>
                                            <p class="promo-failure sender_address_type_error" style={{display:'none'}}> Sender address type required</p>
                                        </div>

                                        <div class="form-group">
                                            <label class="form-label">District<sup>*</sup></label>
                                            <select class="form-control select2-hidden-accessible" name="sender_district" id="sender_district" onchange="getSenderArea(this.value,'from');" data-select2-id="select2-data-sender_district" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="select2-data-2-h1xx">Select District</option>

                                                <option value="Bagerhat">Bagerhat                                    </option>

                                                <option value="Bandarban">Bandarban                                    </option>

                                                <option value="Barguna">Barguna                                    </option>

                                                <option value="Barisal">Barisal                                    </option>

                                                <option value="Bhola">Bhola                                    </option>

                                                <option value="Bogra">Bogra                                    </option>

                                                <option value="Brahamanbaria">Brahamanbaria                                    </option>

                                                <option value="Brahmanbaria">Brahmanbaria                                    </option>

                                                <option value="Chandpur">Chandpur                                    </option>

                                                <option value="Chapainawabganj">Chapainawabganj                                    </option>

                                                <option value="Chittagong">Chittagong                                    </option>

                                                <option value="Chittagong City">Chittagong City                                    </option>

                                                <option value="Chuadanga">Chuadanga                                    </option>

                                                <option value="Comilla">Comilla                                    </option>

                                                <option value="Cox's bazar">Cox's bazar                                    </option>

                                                <option value="Dhaka">Dhaka                                    </option>

                                                <option value="Dinajpur">Dinajpur                                    </option>

                                                <option value="Faridpur">Faridpur                                    </option>

                                                <option value="Feni">Feni                                    </option>

                                                <option value="Gaibandha">Gaibandha                                    </option>

                                                <option value="Gazipur">Gazipur                                    </option>

                                                <option value="Gopalganj">Gopalganj                                    </option>

                                                <option value="Habiganj">Habiganj                                    </option>

                                                <option value="Jamalpur">Jamalpur                                    </option>

                                                <option value="Jessore">Jessore                                    </option>

                                                <option value="Jhalokati">Jhalokati                                    </option>

                                                <option value="Jhenaidah">Jhenaidah                                    </option>

                                                <option value="Joypurhat">Joypurhat                                    </option>

                                                <option value="Khagrachhari">Khagrachhari                                    </option>

                                                <option value="Khulna">Khulna                                    </option>

                                                <option value="Kishoreganj">Kishoreganj                                    </option>

                                                <option value="Kurigram">Kurigram                                    </option>

                                                <option value="Kushtia">Kushtia                                    </option>

                                                <option value="Lakhshmipur">Lakhshmipur                                    </option>

                                                <option value="Lalmonirhat">Lalmonirhat                                    </option>

                                                <option value="Madaripur">Madaripur                                    </option>

                                                <option value="Magura">Magura                                    </option>

                                                <option value="Manikganj">Manikganj                                    </option>

                                                <option value="Meherpur">Meherpur                                    </option>

                                                <option value="Moulvibazar">Moulvibazar                                    </option>

                                                <option value="Munshiganj">Munshiganj                                    </option>

                                                <option value="Mymensingh">Mymensingh                                    </option>

                                                <option value="Naogaon">Naogaon                                    </option>

                                                <option value="Narail">Narail                                    </option>

                                                <option value="Narayanganj">Narayanganj                                    </option>

                                                <option value="Narsingdi">Narsingdi                                    </option>

                                                <option value="Natore">Natore                                    </option>

                                                <option value="Netrokona">Netrokona                                    </option>

                                                <option value="Nilphamari">Nilphamari                                    </option>

                                                <option value="Noakhali">Noakhali                                    </option>

                                                <option value="Pabna">Pabna                                    </option>

                                                <option value="Panchagarh">Panchagarh                                    </option>

                                                <option value="Patuakhali">Patuakhali                                    </option>

                                                <option value="Pirojpur">Pirojpur                                    </option>

                                                <option value="Rajbari">Rajbari                                    </option>

                                                <option value="Rajshahi">Rajshahi                                    </option>

                                                <option value="Rangamati">Rangamati                                    </option>

                                                <option value="Rangpur">Rangpur                                    </option>

                                                <option value="Satkhira">Satkhira                                    </option>

                                                <option value="Shariatpur">Shariatpur                                    </option>

                                                <option value="Sherpur">Sherpur                                    </option>

                                                <option value="Sirajganj">Sirajganj                                    </option>

                                                <option value="Sunamganj">Sunamganj                                    </option>

                                                <option value="Sylhet">Sylhet                                    </option>

                                                <option value="Takurgaon">Takurgaon                                    </option>

                                                <option value="Tangail">Tangail                                    </option>

                                                <option value="Thakurgaon">Thakurgaon                                    </option>

                                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-uqmf" style={{width: "456.5px;"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-sender_district-container" aria-controls="select2-sender_district-container"><span class="select2-selection__rendered" id="select2-sender_district-container" role="textbox" aria-readonly="true" title="Select District">Select District</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <p class="promo-failure sender_district_error" style={{display:'none'}}> Sender district
                                                required</p>
                                        </div>
                                        <div class="form-group">
                                            <label class="form-label">Nearest Area<sup>*</sup></label>
                                            <select class="form-control select2-hidden-accessible" name="sender_area" id="sender_area" onchange="getPostcodeThana(this.value,'from')" data-select2-id="select2-data-sender_area" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="select2-data-4-2v1p">Select Area</option>
                                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-3-fnbt" style={{width: "456.5px;"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-sender_area-container" aria-controls="select2-sender_area-container"><span class="select2-selection__rendered" id="select2-sender_area-container" role="textbox" aria-readonly="true" title="Select Area">Select Area</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <input type="hidden" name="sender_area_loggin" />
                                                <p class="promo-failure sender_area_error" style={{display:'none'}}> Sender area required</p>
                                        </div>
                                        <p>Post Code : <span id="sender_postcode"></span>
                                        </p>
                                        <input class="form-control" type="hidden" value="" name="sender_postcode" />
                                            <input class="form-control" type="hidden" value="" name="sender_thana" />
                                                <div class="form-group">
                                                    <label class="form-label">Sender Address <sup>*</sup></label>
                                                    <textarea maxlength="200" placeholder="Enter sender address" class="form-control" name="sender_address" id="" rows="5"></textarea>
                                                    <p class="promo-failure sender_address_error" style={{display:'none'}}> Sender address required
                                                    </p>
                                                </div>

                                                {/* <a class="common-btn" onclick="senderInfoVerification();" h>CONTINUE</a> */}
                                            </div>
                                        </div>
                                        );
};

                                        export default CreateOrder;