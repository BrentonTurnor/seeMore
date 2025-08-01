import './Home.css';
import { Card } from 'semantic-ui-react'

export const Home = () => {

    //Function to set up starting date of betting and then work out every 3 weeks from there. This sets who bets on what week.
    var baselineTuesday = new Date();

    baselineTuesday.setMonth(2);
    baselineTuesday.setDate(14);
    baselineTuesday.setFullYear(2025);

    //Test Date
    //baselineTuesday.setMonth(1);
    //baselineTuesday.setDate(20);
    //baselineTuesday.setFullYear(2024);

    console.log("Comp start date: ", baselineTuesday)

    var currentDate = new Date();

    console.log("Current date & time: ", currentDate)

    var diffInWeeks = GetDifferenceInWeeks(baselineTuesday, currentDate);

    var choices = ["A", "B", "C"];

    if (diffInWeeks < 0) {
        var choiceForThisWeek = "All";
    }
    else {
        choiceForThisWeek = choices[diffInWeeks % choices.length];
    }

    console.log(choiceForThisWeek);

    function GetDifferenceInWeeks(week1, week2) {
        var diffInMs = currentDate - baselineTuesday;

        var msPerDay = (1000 * 60 * 60 * 24);
        var diffInDays = Math.floor(diffInMs / msPerDay);

        var diffInWeeks = Math.floor(diffInDays / 7);
        console.log(diffInWeeks);
        return diffInWeeks;
    }

    if (choiceForThisWeek === "A") {
        console.log("It's Group 1's turn to bet")
        setTimeout(function () {
            document.getElementById("Group1").style.setProperty('background-color', 'var(--secondaryText)');
            document.getElementById("Group2").style.setProperty('background-color', 'white');
            document.getElementById("Group3").style.setProperty('background-color', 'white');
        }, 100)
    }
    else if (choiceForThisWeek === "B") {
        console.log("It's Group 2's turn to bet")
        setTimeout(function () {
            document.getElementById("Group2").style.setProperty('background-color', 'var(--secondaryText)');
            document.getElementById("Group1").style.setProperty('background-color', 'white');
            document.getElementById("Group3").style.setProperty('background-color', 'white');
        }, 100)
    }
    else if (choiceForThisWeek === "C") {
        console.log("It's Group 3's turn to bet")
        setTimeout(function () {
            document.getElementById("Group3").style.setProperty('background-color', 'var(--secondaryText)');
            document.getElementById("Group1").style.setProperty('background-color', 'white');
            document.getElementById("Group2").style.setProperty('background-color', 'white');
        }, 100)
    }
    else {
        console.log("It's everyones turn to bet")
        setTimeout(function () {
            document.getElementById("Group1").style.setProperty('background-color', 'var(--secondaryText)');
            document.getElementById("Group2").style.setProperty('background-color', 'var(--secondaryText)');
            document.getElementById("Group3").style.setProperty('background-color', 'var(--secondaryText)');
        }, 100)
    }


    return (
        <div className='Home-div'>
            <h1 className='text' id="text-header">Welcome Fellow HeMan Punter!</h1>
            <div className='homeParagraph'>
                <p className='generalText' id="homeInto">
                    HeMan Woman Haters Investment Club was established in 2018. When a group of mates decided it would be a good idea to start a betting competion between friends. This quickly turned into an "Investment Club" when they saw returns in the thousands. Since then the club has grown to 12 members and always looking for more contributers/members.
                </p>
                <p className='generalText' id="homeInto">
                    The club is made up of 12 members, each member is required to pay $200 at the start of the season. This money is then invested into the club, with the goal of making a profit. Each member of the club bets("invests") $25 once ever three weeks. A roster is established at the start of the season to determine who bets on what week. Bets can be placed anytime during the week from Thursday through to the following Tuesday.
                </p>
                <p className='generalText' id="homeInto">
                    Founding Members - <span className='memberNames'>Brenton, Spicer, Scott, Crompy, Ski and Jamsey</span>
                </p>
            </div>
            <div className='homeMembersDiv'>
                <h2 className='currentMembersHeader'>Current Members</h2>
                <div className='currentMembers'>
                    <div className='members'>
                        <img src="/Photos/BT.png" alt="Brenton Turnor" className='memberPhoto' />
                        <div className='memberName'>Brenton</div>
                        <div className='memberTitle'>Commissioner</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Fake.png" alt="Brenton Jaskola" className='memberPhoto' />
                        <div className='memberName'>Fake</div>
                        <div className='memberTitle'>Accountant</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Spicer.png" alt="Brendan Spicer" className='memberPhoto' />
                        <div className='memberName'>Spicer</div>
                        <div className='memberTitle'>Disgraced Former Commissioner</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Scott.png" alt="Scott Bamford" className='memberPhoto' />
                        <div className='memberName'>Scott</div>
                        <div className='memberTitle'>Winner winner chicken dinner</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Crompy.png" alt="Beau Raffaele" className='memberPhoto' />
                        <div className='memberName'>Crompy</div>
                        <div className='memberTitle'>One Season Wonder</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Ski.png" alt="Daniel Milevski" className='memberPhoto' />
                        <div className='memberName'>Ski</div>
                        <div className='memberTitle'>Only "Wins" in his personal account</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Blakey.png" alt="Paul Blakey" className='memberPhoto' />
                        <div className='memberName'>Blakey</div>
                        <div className='memberTitle'>Bored with this group</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Simmo.png" alt="Simmo" className='memberPhoto' />
                        <div className='memberName'>Simmo</div>
                        <div className='memberTitle'>Member</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Jamsey.png" alt="Jamsey Moose" className='memberPhoto' />
                        <div className='memberName'>Jamsey</div>
                        <div className='memberTitle'>Member</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Kane.png" alt="Kane Hornsey" className='memberPhoto' />
                        <div className='memberName'>Kane</div>
                        <div className='memberTitle'>Harvey Norman - It's been 3 years with no interest</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Cam.png" alt="Cameron Starkie" className='memberPhoto' />
                        <div className='memberName'>Cam</div>
                        <div className='memberTitle'>New Member</div>
                    </div>
                    <div className='members'>
                        <img src="/Photos/Pano.png" alt="Christopher Pano" className='memberPhoto' />
                        <div className='memberName'>Pano</div>
                        <div className='memberTitle'>New Member</div>
                    </div>
                </div>
            </div>
            <div className='homeMembersDiv'>
                <h2 className='currentGroupsHeader'>Current Betting Groups 2025</h2>
                <p className='currentGroupsText'>  Current betting group highlighted</p>
                <div className="currentGroups">
                    <div className='currentGroupsList'>
                        <Card
                            className='groupCard'
                            id="Group1"
                            link
                            header='Group 1'
                            meta='Week 1'
                            description={[
                                <div>Cam</div>,
                                <div>Moose</div>,
                                <div>Pano</div>,
                                <div>Ski</div>,
                            ]}
                        />
                    </div>
                    <div className='currentGroupsList'>
                        <Card
                            className='groupCard'
                            id="Group2"
                            link
                            header='Group 2'
                            meta='Week 2'
                            description={[
                                <div>Scott</div>,
                                <div>Crompy</div>,
                                <div>Kane</div>,
                                <div>BT</div>,
                            ]}
                        />
                    </div>
                    <div className='currentGroupsList'>
                        <Card
                            className='groupCard'
                            id="Group3"
                            link
                            header='Group 3'
                            meta='Week 3'
                            description={[
                                <div>Fake</div>,
                                <div>Spicer</div>,
                                <div>Simmo</div>,
                                <div>Blakey</div>,
                            ]}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}