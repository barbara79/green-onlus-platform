export interface Gadget {
    id: number;
    name: string;
    type: 'physical' | 'digital_badge';
    impact_description: string;
    co2_saved_grams: number;
}

export const fetchGadgets = async (): Promise<Gadget[]> => {
    const response = await fetch('/api/gadgets');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};