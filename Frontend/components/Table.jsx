import { Fragment, Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        nama: `Charity Concert`,
        tgl: `6 Juli 2022`,
        penanggungJawab: `Dwi Muharni`,
        jumlahFile: `2`,
      },
      {
        nama: `Open House Kost`,
        tgl: `12 Juli 2022`,
        penanggungJawab: `Reza Rachmalia`,
        jumlahFile: `2`,
      },
    ];

    this.dataRab = [
      {
        namaFile: "Rekapitulasi RAB",
        tanggalUpload: "14 Januari 2022",
        tanggalCek: "16 Januari 2022",
      },
    ];

    this.dataa = [
      {
        nama: "Transportasi panitia",
        tgl: "3 Juli 2022",
        tipe: "PDF",
      },
      {
        nama: "Print Proposal",
        tgl: "1 Juli 2022",
        tipe: "JPG",
      },
    ];

    this.index = (
      <table className="w-full h-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama Proker</th>
            <th>Tanggal Pelaksanaan</th>
            <th>Penanggung Jawab</th>
            <th>Jumlah File</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center align-top self-start">
          {this.data.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.nama}</td>
              <td>{data.tgl}</td>
              <td>{data.penanggungJawab}</td>
              <td>{data.jumlahFile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    this.detail = (
      <table className="w-full h-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama File</th>
            <th>Tanggal Pelaksanaan</th>
            <th>Tipe File</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-center align-top self-start">
          {this.dataa.map((data, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{data.nama}</td>
              <td>{data.tgl}</td>
              <td>{data.tipe}</td>
              <td className="text-lg px-3 ">
                <a href="#" className="fa fa-upload"></a>
              </td>
              <td className="text-lg px-3 ">
                <a href="#" className="fa fa-download"></a>
              </td>
              <td className="text-lg px-3 ">
                <a href="#" className="fa fa-trash"></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    this.RabSiap = (
      <table className="w-full h-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama file</th>
            <th>Tanggal Upload</th>
            <th>Tanggal Cek</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody className="text-center align-top self-start">
          {this.dataRab.map((data, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{data.namaFile}</td>
              <td>{data.tanggalUpload}</td>
              <td>{data.tanggalCek}</td>
              <td>
                <input type="button" className="w-1/2 h-8 text-white text-2 bg-blue-900 border-2 rounded-full" value="SIAP"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );

    this.RabRevisi = (
      <table className="w-full h-auto">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama file</th>
            <th>Tanggal Upload</th>
            <th>Tanggal Cek</th>
            <th>Keterangan</th>
          </tr>
        </thead>
        <tbody className="text-center align-top self-start">
          {this.dataRab.map((data, index) => (
            <tr>
              <td>{index + 1}.</td>
              <td>{data.namaFile}</td>
              <td>{data.tanggalUpload}</td>
              <td>{data.tanggalCek}</td>
              <td>
                <input type="button" className="w-1/2 h-8 text-white text-2 bg-red-900 border-2 rounded-full" value="REVISI"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  render() {
    if (this.props.title == "index") {
      return <Fragment>{this.index}</Fragment>;
    } else if (this.props.title == "detail") {
      return <Fragment>{this.detail}</Fragment>;
    } else if (this.props.title == "RabSiap") {
      return <Fragment>{this.RabSiap}</Fragment>;
    } else if (this.props.title == "RabRevisi") {
      return <Fragment>{this.RabRevisi}</Fragment>;
    }
  }
}
export default Table;
