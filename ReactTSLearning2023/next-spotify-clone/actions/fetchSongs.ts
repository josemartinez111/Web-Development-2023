// FILE: actions/fetchSongs.ts
// _______________________________________________
// _______________________________________________

import { SongType } from "@/types/types.supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
// _______________________________________________


export const fetchSongs = async (): Promise<Array<SongType>> => {
	const supabase = createServerComponentClient({
		cookies: cookies,
	});
	
	const displayOrder = { ascending: false };
	
	// Fetching our songs
	const { data, error: supabaseError } = await supabase
		.from('songs')
		.select('*')
		.order('created_at', displayOrder);
	
	if (supabaseError) {
		console.error(supabaseError);
	}
	
	return data as any || [];
};
// _______________________________________________
















