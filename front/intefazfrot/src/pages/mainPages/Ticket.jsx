import React, { useState } from 'react';

function Ticket() {
    const [ticketName, setTicketName] = useState('');
    const [responsible, setResponsible] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleTicketNameChange = (event) => setTicketName(event.target.value);
    const handleResponsibleChange = (event) => setResponsible(event.target.value);
    const handleDeadlineChange = (event) => setDeadline(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Ticket Name:', ticketName);
        console.log('Responsible:', responsible);
        console.log('Deadline:', deadline);

        const url = `http://localhost:8080/api/test-save/${encodeURIComponent(ticketName)}?responsible=${encodeURIComponent(responsible)}&deadline=${encodeURIComponent(deadline)}`;

        try {
            const response = await fetch(url, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Ticket successfully saved');

        } catch (error) {
            console.error('Error uploading ticket:', error);
        }

        // Clear the form
        setTicketName('');
        setResponsible('');
        setDeadline('');
    };

    return (
        <>
            <h1>Add your tickets</h1>
            <input type="text" placeholder="Ticket Name" value={ticketName} onChange={handleTicketNameChange} />
            <input type="text" placeholder="Responsible" value={responsible} onChange={handleResponsibleChange} />
            
            {/* Input de tipo date */}
            <input type="date" value={deadline} onChange={handleDeadlineChange} />

            <button onClick={handleSubmit}>Add Ticket</button>
            <button onClick={() => { setTicketName(''); setResponsible(''); setDeadline(''); }}>Clear</button>
        </>
    );
}

export default Ticket;
