import React from "react";
import {useHistory} from "react-router-dom"

const Page2 = (data) => {
    const history = useHistory()
    var data2 = data.location.state

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
    function onClick(){

        var check = []
        for(var x = 0; x < 6; x++) {
            check.push(false);
        }

        var q1 = document.forms[0];
        var q2 = document.forms[1];
        var q3 = document.forms[2];
        var q4 = document.forms[3];
        var q5 = document.forms[4];
        var q6 = document.forms[5];

        for (var i = 0; i < q1.length; i++) {
            if (q1[i].checked) {
                data2[6] = q1[i].value;
            }
            if (q2[i].checked) {
                data2[7] = q2[i].value;
            }
            if (q3[i].checked) {
                data2[8] = q3[i].value;
            }
            if (q4[i].checked) {
                data2[9] = q4[i].value;
            }
            if (q5[i].checked) {
                data2[10] = q5[i].value;
            }
            if (q6[i].checked) {
                data2[11] = q6[i].value;
            }
        }
        for(var y = 0;y < 6;y++){
            if (data2[y+6] === ""){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
            else{
                check[y] = true
            }
        }

        if ((check[0] === true ) && (check[1] === true ) && (check[2] === true ) && (check[3] === true ) && (check[4] === true ) && (check[5] === true )){
            console.log(data2)
            console.log(check)
            history.push({
                pathname: "/page3",
                state: data2
            })
        }
    }   
    return(
        <div class="content">
                <div class="card">
                    <span class="span">การต่อสู้</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1_1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio1_5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div ><hr/></div>
                <div class="card">
                    <span>การต่อสู้แบบตัวต่อตัว</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>การวางแผน</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>เวลาในการเล่น</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>ฝึกกระบวนการคิด</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <div class="card">
                    <span>เกี่ยวกับกีฬา</span>
                    <form>
                        <label>
                            <input type="radio" id="radio1" name="1" value="1" />
                            <span class="check">1</span>
                        </label>
                        <label>
                            <input type="radio" id="radio2" name="1" value="2"/>
                            <span class="check">2</span>
                        </label>
                        <label>
                            <input type="radio" id="radio3" name="1" value="3"/>
                            <span class="check">3</span>
                        </label>
                        <label>
                            <input type="radio" id="radio4" name="1" value="4"/>
                            <span class="check">4</span>
                        </label>
                        <label>
                            <input type="radio" id="radio5" name="1" value="5"/>
                            <span class="check">5</span>
                        </label>
                    </form>
                </div>
                <div><hr/></div>
                <button onClick={onClick}>Click</button>
            </div>
    );
}
export default Page2;