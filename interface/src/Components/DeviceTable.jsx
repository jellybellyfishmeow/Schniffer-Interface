import React from "react";
import { Table} from 'react-bootstrap';



const DeviceTable = () => (
	<Table responsive striped bordered condensed hover>
		<thead>
			<tr>
				<th>Device Vendor</th>
				<th>Device Type</th>
				<th>OS used</th>
				<th>Count</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Apple</td>
				<td>Phone, computer</td>
				<td>Apple iOS 11.0, Apple OS High Sierra</td>
				<td>3</td>
			</tr>
			<tr>
				<td>Linux</td>
				<td>Computer</td>
				<td>Linux 3.2 - 4.9</td>
				<td>1</td>
			</tr>
			<tr>
				<td>Windows</td>
				<td>Computer</td>
				<td>Microsoft Windows Server 2008 SP1, Microsoft Windows XP SP2</td>
				<td>2</td>
			</tr>
			<tr>
				<td>Arris Group</td>
				<td>Unknown</td>
				<td>Unknown</td>
				<td>1</td>
			</tr>
		</tbody>
	</Table>
);

export default DeviceTable;