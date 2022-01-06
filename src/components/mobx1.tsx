// import React from "react";
// import { appDataInter } from "../store/appDataInter";
// import { inject, observer } from "mobx-react";

// interface Imobox1 {
//   appData?: appDataInter;
// }

// @inject("appData")
// @observer
// export class Mobx1 extends React.Component<Imobox1> {
//   render() {
//     const { num } = this.props.appData!;

//     return (
//       <div>
//         this is mobx1 ==={num}
//         this is mobx1 ==={this.props.appData?.num}
//       </div>
//     );
//   }
// }




import React from "react";
import { appDataInter } from "../store/appDataInter";
import { inject, observer } from "mobx-react";

interface Imobox1 {
  appData?: appDataInter;
}

@inject("appData")
@observer
export class Mobx1 extends React.Component<Imobox1> {
  render() {
    const { num } = this.props.appData!;

    return (
      <div>
        this is mobx1 ==={num}
        this is mobx1 ==={this.props.appData?.num}
      </div>
    );
  }
}

